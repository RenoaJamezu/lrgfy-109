import { Link } from "react-router-dom"

export const AddSongPlaylistButton = () => {
  return (
    <>
      <div className="">
        <Link to="/add-song-playlist">
          <div className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-white">
            Add Song
          </div>
        </Link>
      </div>
    </>
  )
}