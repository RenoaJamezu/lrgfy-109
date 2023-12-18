import { useEffect, useState } from "react"
import { AddSongPlaylistButton } from "../components/AddSongPlaylistButton"
import { SongCard } from "../components/SongCard"
import { Header } from "../components/header/Header"
import { Sidebar } from "../components/navbar/Sidebar"
import { buildUrl } from "../utils/buildUrl"

export const MyPlaylist = () => {
  const [playlist, setPlaylist] = useState([]);
  const user_id = localStorage.getItem("user_id");


  const getPlaylistInfo = async () => {
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
  useEffect(()=>{
    getPlaylistInfo()
  },[])
  
  return (
    <>
    <div>
      <Sidebar />
      <Header 
        title={"My Playlist"}
      />
      <AddSongPlaylistButton />
      <div className="ml-[300px] h-screen bg-secondaryColor">
        <div className="flex flex-col bg-secondaryColor gap-5 px-10 pt-36">
          <SongCard />
        </div>
      </div>
    </div>
    </>
  )
}