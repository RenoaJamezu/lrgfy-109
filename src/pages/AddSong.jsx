import { Link } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Sidebar } from "../components/navbar/Sidebar"
import { FaUpload } from "react-icons/fa";


export const AddSong = () => {
  const handleAddSong = async (e) => {

  }

  return (
    <>
      <div>
        <Sidebar />
        <Header
          title={"Add Song"}
        />
        <div className="ml-[300px] h-screen">
          <div className="bg-secondaryColor gap-5 px-10 pt-28 h-full">
            <form>
              <div className="flex flex-col">
                <div className="flex gap-5">
                  <div>
                    <h1 className="text-primaryColor pt-5 pb-1 font-bold">Song Name</h1>
                    <input
                      type="text"
                      placeholder="Song Name"
                      className="border-2 border-primaryColor bg-transparent h-12 w-auto p-3 text-primaryColor font-normal text-xl rounded-lg outline-none"
                    />
                  </div>
                  <div>
                    <h1 className="text-primaryColor pt-5 pb-1 font-bold">Artist Name</h1>
                    <input
                      type="text"
                      placeholder="Artist Name"
                      className="border-2 border-primaryColor bg-transparent h-12 w-auto p-3 text-primaryColor font-normal text-xl rounded-lg outline-none"
                    />
                  </div>
                  <div className="fixed top-7 right-10">
                    <button
                      onClick={handleAddSong}
                      className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-white "
                    >
                      Add
                    </button>
                  </div>
                </div>
                {/* <div>
                  <h1 className="text-primaryColor pt-5 pb-1 font-bold">Description</h1>
                  <textarea
                    placeholder="Description"
                    className="border-2 border-primaryColor bg-transparent h-full w-full p-3 text-primaryColor font-normal text-xl rounded-lg outline-none"  
                  />
                </div> */}
                <div className="flex items-center gap-3 py-5">
                  <h1 className="text-primaryColor font-bold">Upload Song</h1>
                  <label htmlFor="fileInput" className="cursor-pointer">
                    <div className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center text-black hover:text-white">
                      <FaUpload
                        size={22}
                      />
                      <input
                        type="file"
                        accept="image/*"
                        id="fileInput"
                        style={{
                          display: "none",
                        }}
                      />
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}