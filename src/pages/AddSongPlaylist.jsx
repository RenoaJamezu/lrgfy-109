import { Link } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Sidebar } from "../components/navbar/Sidebar"
import { FaUpload } from "react-icons/fa";


export const AddSongPlaylist = () => {
  const handleAddSongPlaylist = async (e) => {
    
  }

  return (
    <>
      <div>
        <Sidebar />
        <Header 
          title={"Add Song"}
        />
        <CreatePlaylistButton />
        <div className="ml-[300px] h-screen">
          <div className="flex flex-col bg-secondaryColor gap-5 px-10 pt-36 h-full">
            
          </div>
        </div>
      </div>
    </>
  )
}