import { Link } from "react-router-dom";

export const SongCard = () => {

  const handleDeleteSong = async () => {
    
  }

  return (
    <>
      <div className="flex flex-col gap-10 px-10 bg-secondaryColor">
        <div className="flex items-center justify-between">
          <Link>
            <div className="flex items-center">
              <img
                src=""
                alt="Song photo"
                className="w-[100px] h-[100px] border-primaryColor border rounded-lg bg-primaryColor"
              />
              <h1 className="text-primaryColor px-10 font-bold">Song Name</h1>
            </div>
          </Link>
          <button
              onClick={handleDeleteSong}
              className="border-2 border-primaryColor bg-primaryColor py-2 px-5 font-medium text-sm rounded-lg flex items-center hover:text-red-500"
            >
              Delete Song
            </button>
        </div>
      </div>
    </>
  );
};
