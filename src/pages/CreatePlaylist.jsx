import { useNavigate } from "react-router-dom"
import { Header } from "../components/header/Header"
import { Sidebar } from "../components/navbar/Sidebar"
import { useState } from "react"
import { buildUrl } from "../utils/buildUrl"
import { MdAddAPhoto } from "react-icons/md";

export const CreatePlaylist = () => {
  const [playlist_name, setPlaylistName] = useState("");
  const [header_url, setHeaderUrl] = useState("");
  const user_id = localStorage.getItem("user_id");
  const navigator = useNavigate();


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
                      value={playlist_name}
                      onChange={(e) => setPlaylistName(e.target.value)}
                      placeholder="Playlist Name"
                      className="border-2 border-primaryColor bg-transparent h-12 w-auto p-3 text-white font-normal text-xl rounded-lg outline-none"
                    />
                    {/* <div className="flex items-center gap-5">
                      <h1 className="text-primaryColor font-bold">Add Playlist Image</h1>
                      <label htmlFor="fileInput" className="cursor-pointer">
                        <div className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center text-black hover:text-white">
                        <MdAddAPhoto 
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
                    </div> */}
                    <div className="fixed top-7 right-10">
                      <button
                        onClick={handleCreatePlaylist}
                        className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-white "
                      >
                        Create
                      </button>
                    </div>
                  </div>
                </div>
                {/* <div>
                  <h1 className="text-primaryColor pt-5 pb-1 font-bold">Description</h1>
                  <textarea
                    placeholder="Description"
                    className="border-2 border-primaryColor bg-transparent h-full w-full p-3 text-white font-normal text-xl rounded-lg outline-none"
                  />
                </div> */}
                <div>
                <h1 className="text-primaryColor pt-5 pb-1 font-bold">Add Image</h1>
                <input
                      type="text"
                      value={header_url}
                      onChange={(e) => setHeaderUrl(e.target.value)}
                      placeholder="Copy image address"
                      className="border-2 border-primaryColor bg-transparent h-12 w-full p-3 text-white font-normal text-xl rounded-lg outline-none"
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