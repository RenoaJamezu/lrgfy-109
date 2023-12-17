import { Link } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Sidebar } from "../components/navbar/Sidebar"

export const AddSong = () => {
  return (
    <>
      <div>
        <Sidebar />
        <Header 
          title={"Create Playlist"}
        />
        <div className="ml-[300px] h-screen bg-secondaryColor">
          <div className="bg-secondaryColor gap-5 px-10 pt-28">
            <form>
              <div className="flex flex-col">
                <div>
                  <h1 className="text-primaryColor pt-5 pb-1 font-bold">Playlist Name</h1>
                  <div className="flex justify-between">
                    <input 
                      type="text" 
                      placeholder="Playlist Name"
                      className="border-2 border-primaryColor bg-transparent h-12 w-auto p-3 text-primaryColor font-normal text-xl rounded-lg outline-none"
                    />
                    <Link>
                      <div className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-white">
                        Create Playlist
                      </div>
                    </Link>
                  </div>
                </div>
                <div>
                  <h1 className="text-primaryColor pt-5 pb-1 font-bold">Description</h1>
                  <textarea
                    placeholder="Description"
                    className="border-2 border-primaryColor bg-transparent h-full w-full p-3 text-primaryColor font-normal text-xl rounded-lg outline-none"  
                  />
                </div>
                <div>
                  <h1 className="text-primaryColor pt-5 pb-1 font-bold">Upload a song</h1>
                  <input 
                    type="file"
                    className=""
                    />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}