// Library.jsx
import { useState, useEffect } from "react";
import { CreatePlaylistButton } from "../../components/CreatePlaylistButton";
import { PlaylistCard } from "../../components/PlaylistCard";
import { Header } from "../../components/header/Header";
import { Sidebar } from "../../components/navbar/Sidebar";
import { buildUrl } from "../../utils/buildUrl";

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
        <Header title={"Library"} />
        <CreatePlaylistButton />
        <div className="ml-[300px] pt-36 h-screen bg-secondaryColor">
          <PlaylistCard playlist={playlists} />
        </div>
      </div>
    </>
  );
};
