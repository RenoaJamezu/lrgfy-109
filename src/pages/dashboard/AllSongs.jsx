import { AddSongButton } from "../../components/AddSongButton"
import { SongCard } from "../../components/SongCard"
import { Header } from "../../components/header/Header"
import { Sidebar } from "../../components/navbar/Sidebar"

export const AllSongs = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header 
          title={"All Songs"}
        />
        <AddSongButton />
        <div className="ml-[300px] h-screen bg-secondaryColor">
          <div className="flex flex-col bg-secondaryColor gap-5 px-10 pt-36">
            <SongCard />
          </div>
        </div>
      </div>
    </>
  )
}