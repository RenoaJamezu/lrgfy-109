import { useNavigate } from "react-router-dom";
import { Library } from "/src/pages/page/Library";
import { CreatePlaylist } from "../pages/page/CreatePlaylist";
import { useState } from "react";

export const Sidebar = () => {
  
  const nav = useNavigate();

  const [isLibraryOpen, setLibraryOpen] = useState (true)
  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState (false)


  const handleLibrary = async () => {
    setLibraryOpen(true);
    setCreatePlaylistOpen(false);
  }

  const handleCreatePlaylist = async () => {
    setLibraryOpen(false);
    setCreatePlaylistOpen(true);
  }

  const handleLogout = async () => {
    nav("/");
  }

  return (
    <>
      <div className="fixed flex flex-col h-screen bg-tertiaryColor w-[300px]">
        <div className="text-center text-primaryColor font-bold text-[24px] py-7 border-b-2 border-primaryColor bg-transparent">
          LRGfy
        </div>
        <div className="p-10 flex flex-col justify-between h-full bg-transparent">
          <div className="bg-transparent">
            <div className="bg-transparent pb-5">
              <button
                type="submit"
                onClick={handleLibrary}
                className="bg-primaryColor text-secondaryColor px-2 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors"
              >
                Library
              </button>
            </div>
            <div className="bg-transparent pb-5">
              <button
                type="submit"
                onClick={handleCreatePlaylist}
                className="bg-primaryColor text-secondaryColor px-2 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors"
              >
                Create Playlist
              </button>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleLogout}
            className="bg-primaryColor text-secondaryColor px-2 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
      <div className="ml-[300px]">
        {isLibraryOpen ? <Library /> : ""}
        {isCreatePlaylistOpen ? <CreatePlaylist /> : ""}
      </div>
    </>
  );
};
