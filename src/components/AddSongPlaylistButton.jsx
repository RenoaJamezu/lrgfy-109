import { Link } from "react-router-dom"

export const AddSongPlaylistButton = () => {
  return (
    <>
      <div className="fixed bottom-10 right-10">
        <Link to="/add-song-playlist">
          <div className="bg-primaryColor text-black shadow-lg text-xs h-8 rounded-lg px-4 flex items-center gap-2 hover:text-white">
            add song
          </div>
        </Link>
      </div>
    </>
  )
}