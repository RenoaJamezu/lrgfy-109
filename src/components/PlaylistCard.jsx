import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { buildUrl } from "../utils/buildUrl";

export const PlaylistCard = ({ playlist = [] }) => {
  const user_id = localStorage.getItem("user_id");

  const handleDeletePlaylist = async (playlist_id) => {
    try {
      let response = await fetch(buildUrl(`/music/delete-playlist/${playlist_id}`), {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log('Playlist deleted successfully');
        // Optionally, you can also close the modal here if it's open.
        // Implement the modal closing logic based on your modal implementation.
      } else {
        console.log('Failed to delete playlist. Response:', response);
      }
    } catch (error) {
      console.log('Error deleting playlist:', error);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-5 px-10 bg-secondaryColor">
        {playlist.map((playlist, index) => (
          <div 
            key={index}
            className="flex items-center justify-between"  
          >
            {/* Use Link to navigate to the playlist page */}
            <Link to={`/playlist/${playlist?.playlist_id}`}>
              <div className="flex items-center">
                <img
                  src={playlist?.header_url}
                  alt="Playlist photo"
                  className="w-[100px] h-[100px] border-primaryColor border rounded-lg bg-primaryColor"
                />
                <h1 className="text-primaryColor px-10 font-bold">{playlist?.playlist_name}</h1>
              </div>
            </Link>
            {/* Add a button to delete the playlist */}
            <button
              onClick={() => handleDeletePlaylist(playlist.playlist_id)}
              className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-red-500"
            >
              Delete Playlist
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
