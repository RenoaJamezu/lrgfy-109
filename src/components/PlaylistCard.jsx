import { Link } from "react-router-dom"

export const PlaylistCard = () => {
  return(
    <>
      <Link to="/playlist">
          <div className="flex items-center">
            <img
              src=""
              alt="Playlist photo"
              className="w-[100px] h-[100px] border-primaryColor border rounded-lg bg-primaryColor"
            />
            <h1 className="text-primaryColor px-10 font-bold">Playlist #1</h1>
          </div>
      </Link>
    </>
  )
}