import { useState, useEffect } from "react";
import { PlaylistCard } from "../../components/PlaylistCard";
import { Sidebar } from "../../components/navbar/Sidebar";
import { buildUrl } from "../../utils/buildUrl";
import { Link, useNavigate } from "react-router-dom";

export const Library = () => {
  const [playlist_name, setPlaylistName] = useState("");
  const [header_url, setHeaderUrl] = useState("");
  const [playlists, setPlaylists] = useState([]);
  const user_id = localStorage.getItem("user_id");
  const navigator = useNavigate();

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

  const handleCreatePlaylist = async (e) => {
    e.preventDefault();

    if (playlist_name !== "" && header_url !== "" && user_id !== "") {
      try {
        let response = await fetch(buildUrl("/music/create-playlist"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            playlist_name, header_url, user_id,
          }),
        });

        if (response.ok) {
          navigator("/library");
        } else {
          console.error("Error creating new playlist!");
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Error: Input Fields cannot be empty");
    }
  };

  return (
    <>
      <div>
        <Sidebar />
        <div className="fixed ml-[300px] w-screen bg-secondaryColor h-[100px] flex items-center px-10 border-b-2 border-primaryColor">
          <h1 className="text-primaryColor font-bold text-6xl">Library</h1>
        </div>
        <div className="ml-[300px] pt-[120px] h-auto bg-secondaryColor">
          <div className="flex items-center justify-center text-primaryColor text-[30px] font-bold pb-5">
            <h2>Create Playlist</h2>
          </div>
          <div className="flex gap-5 items-center justify-center pb-5">
            <label className="text-primaryColor">Playlist Name:</label>
            <input
              type="text"
              value={playlist_name}
              onChange={(e) => setPlaylistName(e.target.value)}
              placeholder="Playlist Name"
              required
              className="text-xs font-light border border-primaryColor px-4 py-2 rounded-lg outline-none text-white bg-secondaryColor"
            />
            <label className="text-primaryColor">Add Cover:</label>
            <input
              type="text"
              value={header_url}
              onChange={(e) => setHeaderUrl(e.target.value)}
              placeholder="Copy image address"
              required
              className="text-xs font-light border border-primaryColor px-4 py-2 rounded-lg outline-none text-white bg-secondaryColor"
            />
          </div>
          <div className="flex items-center justify-center text-black text-[30px] font-bold">
            <button
              onClick={handleCreatePlaylist}
              className="border-2 border-primaryColor bg-primaryColor py-2 px-5 font-medium text-sm rounded-lg flex items-center hover:text-white"
            >
              Create Playlist
            </button>
          </div>
        </div>
        <div className="ml-[300px] pt-10 h-screen bg-secondaryColor">
          <PlaylistCard playlist={playlists} />
        </div>
      </div>
    </>
  );
};
