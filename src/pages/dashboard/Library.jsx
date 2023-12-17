import { CreatePlaylistButton } from "../../components/CreatePlaylistButton"
import { PlaylistCard } from "../../components/PlaylistCard"
import { Header } from "../../components/header/Header"
import { Sidebar } from "../../components/navbar/Sidebar"

export const Library = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header 
          title={"Library"}
        />
        <CreatePlaylistButton />
        <div className="ml-[300px] h-screen bg-secondaryColor">
          <div className="flex flex-col bg-secondaryColor gap-5 px-10 pt-36">
            <PlaylistCard />
          </div>
        </div>
      </div>
    </>
  )
}