import { useState, useEffect } from "react";
import { PlaylistCard } from "../../components/PlaylistCard";
import { Sidebar } from "../../components/navbar/Sidebar";
import { buildUrl } from "../../utils/buildUrl";
import { Link } from "react-router-dom";

export const Library = () => {
  const [playlists, setPlaylists] = useState([]);
  const user_id = localStorage.getItem("user_id");

  useEffect(() => {
    const fetchPlaylists = async () => {
      try {
        let response = await fetch(buildUrl(`/music/get-user-playlist/${user_id}`), {
          method: "GET",
        });

        if (response.ok) {
          const data = await response.json();
          setPlaylists(data.allUserPlaylist);
        } else {
          console.log("Failed to fetch playlists");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlaylists();
  }, [user_id]);

  return (
    <>
      <div>
        <Sidebar />
        <div className="fixed ml-[300px] w-screen bg-secondaryColor h-[100px] flex items-center px-10 border-b-2 border-primaryColor">
          <h1 className="text-primaryColor font-bold text-6xl">Library</h1>
        </div>
        <div className="fixed top-7 right-10">
          <Link to="/create-playlist">
            <div className="border-2 border-primaryColor bg-primaryColor py-2 px-5 font-medium text-sm rounded-lg flex items-center hover:text-white">
              Create Playlist
            </div>
          </Link>
        </div>
        <div className="ml-[300px] pt-[140px] h-screen bg-secondaryColor">
          <PlaylistCard playlist={playlists} />
        </div>
      </div>
    </>
  );
};
