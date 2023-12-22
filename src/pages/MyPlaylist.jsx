import { useState } from "react";
import { SongCard } from "../components/SongCard";
import { Sidebar } from "../components/navbar/Sidebar";

export const MyPlaylist = () => {
  const [songName, setSongName] = useState();
  const [artist, setArtist] = useState();

  return (
    <>
      <div>
        <Sidebar />
        <div className="fixed ml-[300px] w-screen bg-secondaryColor h-[100px] flex items-center px-10 border-b-2 border-primaryColor">
          <h1 className="text-primaryColor font-bold text-6xl">My playlist</h1>
        </div>
        <div className="ml-[300px] pt-[120px] h-screen bg-secondaryColor">
          <div className="flex items-center justify-center text-primaryColor text-[30px] font-bold pb-5">
            <h2>Add New Music</h2>
          </div>
          <div className="flex gap-5 items-center justify-center pb-5">
            <label className="text-primaryColor">Song Name:</label>
            <input 
              type="text"
              value={songName}
              onChange={(e) => setSongName(e.target.value)}
              placeholder="Song Name"
              className="text-xs font-light border border-primaryColor px-4 py-2 rounded-lg outline-none text-white bg-secondaryColor"
            />
            <label className="text-primaryColor">Artist:</label>
            <input 
              type="text"
              value={artist}
              onChange={(e) => setArtist(e.target.value)}
              placeholder="Artist"
              className="text-xs font-light border border-primaryColor px-4 py-2 rounded-lg outline-none text-white bg-secondaryColor"
            />
            <label className="text-primaryColor">Select Music File:</label>
            <input 
              type="file" 
              accept=".mp3"
              className="file:text-xs file:border file:border-primaryColor file:px-4 file:py-2 file:rounded-lg file:outline-none text-white file:bg-primaryColor file:cursor-pointer file:hover:text-white"
            />
          </div>
          <div className="flex items-center justify-center text-black text-[30px] font-bold">
            <button className="border-2 border-primaryColor bg-primaryColor py-2 px-5 font-medium text-sm rounded-lg flex items-center hover:text-white">
              Add song
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
