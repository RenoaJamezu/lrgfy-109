import { useState } from "react";
import { Library } from "/src/pages/page/Library";
import { AllSongs } from "../pages/page/AllSongs";

export const Sidebar = () => {
  
  const [isLibraryOpen, setLibraryOpen] = useState (true)
  const [isAllSongsOpen, setAllSongsOpen] = useState (false)


  const handleLibrary = async () => {
    setLibraryOpen(true);
    setAllSongsOpen(false);
  }


  const handleAllSongs = async () => {
    setLibraryOpen(false);
    setAllSongsOpen(true);
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
                className={`${
                  isLibraryOpen
                    ? "bg-primaryColor text-white"
                    : "bg-primaryColor text-secondaryColor"
                } px-2 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors`}
              >
                My Library
              </button>
            </div>
            <div className="bg-transparent pb-5">
              <button
                type="submit"
                onClick={handleAllSongs}
                className={`${
                  isAllSongsOpen
                    ? "bg-primaryColor text-white"
                    : "bg-primaryColor text-secondaryColor"
                } px-2 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors`}
              >
                All Songs
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
        {isAllSongsOpen ? <AllSongs /> : ""}
      </div>
    </>
  );
};
