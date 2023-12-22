import { SongCard } from "../components/SongCard";
import { Sidebar } from "../components/navbar/Sidebar";

export const MyPlaylist = () => {
  return (
    <>
      <div>
        <Sidebar />
        <div className="fixed ml-[300px] w-screen bg-secondaryColor h-[100px] flex items-center px-10 border-b-2 border-primaryColor">
          <h1 className="text-primaryColor font-bold text-6xl">Library</h1>
        </div>
        <div className="flex gap-5 fixed top-7 right-10">
        </div>
        <div className="ml-[300px] h-screen bg-secondaryColor">
          <div className="flex flex-col bg-secondaryColor gap-5 px-10 pt-36">
            {/* Use SongCard component */}
            <SongCard />
          </div>
        </div>
      </div>
    </>
  );
};
