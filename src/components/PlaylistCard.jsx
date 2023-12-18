import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { buildUrl } from "../utils/buildUrl"


export const PlaylistCard = () => {
  const [playlistInfo, setPlaylistInfo] = useState([]);
  const user_id = localStorage.getItem("user_id");

  const [playlist, setPlaylist] = useState([])

  const getPlaylistInfo = async () => {
   console.log('Frontend handling get playlist informations')
    try {
      let response = await fetch(buildUrl(`/music/get-user-playlist/${user_id}`), {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setPlaylist(data.allUserPlaylist)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getPlaylistInfo()
  },[])
  return (
    <>
      <div className="flex flex-col gap-5">
        {playlist.map((playlist, index) => (
          <div key={index} >
            <Link to="/playlist">
              <div className="flex items-center">
                <img
                  src={playlist?.header_url}
                  alt="Playlist photo"
                  className="w-[100px] h-[100px] border-primaryColor border rounded-lg bg-primaryColor"
                />
                <h1 className="text-primaryColor px-10 font-bold">{playlist?.playlist_name}</h1>
              </div>
            </Link>

          </div>
        ))}
      </div>
    </>
  )
}