import { Link } from "react-router-dom"

export const CreatePlaylistButton = () => {
  return (
    <>
      <div className="fixed top-7 right-10">
        <Link to="/create-playlist">
          <div className="border-2 border-primaryColor bg-primaryColor h-12 py-3 px-10 font-medium text-xl rounded-lg flex items-center hover:text-white">
            Create Playlist
          </div>
        </Link>
      </div>
    </>
  )
}