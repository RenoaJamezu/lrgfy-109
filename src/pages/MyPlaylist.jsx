import { useEffect, useState } from "react"
import { AddSongPlaylistButton } from "../components/AddSongPlaylistButton"
import { SongCard } from "../components/SongCard"
import { Header } from "../components/header/Header"
import { Sidebar } from "../components/navbar/Sidebar"
import { buildUrl } from "../utils/buildUrl"

export const MyPlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const user_id = localStorage.getItem("user_id");


  const getPlaylistInfo = async (e) => {
    e.preventDefault();
    console.log('Frontend handling get playlist informations')
    try {
      let response = await fetch(buildUrl(`/music/get-user-playlist/${user_id}`), {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPlaylist(data.allUserPlaylist)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getPlaylistInfo()
  }, [])

  const handleDeletePlaylist = async (e) => {
    e.preventDefault();

  }

  return (
    <>
      <div>
        <Sidebar />
        <Header
          title={"My Playlist"}
        />
        <div className="flex gap-5 fixed top-7 right-10">
          <AddSongPlaylistButton />
          <div className="">
            <button
              onClick={handleDeletePlaylist}
              className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-red-500"
            >
              Delete Playlist
            </button>
          </div>
        </div>
        <div className="ml-[300px] h-screen bg-secondaryColor">
          <div className="flex flex-col bg-secondaryColor gap-5 px-10 pt-36">
            <SongCard />
          </div>
        </div>
      </div>
    </>
  )
}