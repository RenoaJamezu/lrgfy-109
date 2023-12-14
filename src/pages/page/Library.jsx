import { useState } from "react"
import { CreatePlaylist } from "../../components/modal/CreatePlaylist"
import { PlaylistButton } from "../../components/modal/PlaylistButton"

export const Library = () => {
  const [isCreatePlaylistOpen, setCreatePlaylistOpen] = useState(false)

  const handleCreatePlaylist = () => {
    setCreatePlaylistOpen(!isCreatePlaylistOpen)
  }

  const onChangeCreatePlaylist = (value) => {
    if (value) {
      setCreatePlaylistOpen(false)
    }
  }

  return (
    <>
      <div className="px-10 w-full h-full bg-secondaryColor">
        <div className="flex border-b-2 border-primaryColor justify-between items-center">
          <p className="text-primaryColor font-semibold text-[32px] lg:text-[64px] px-10">My Library</p>
          <div className="bg-transparent px-10">
            <button
              type="submit"
              onClick={handleCreatePlaylist}
              className="bg-primaryColor text-secondaryColor px-10 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors"
            >
              {isCreatePlaylistOpen ? "Close" : "Create Playlist"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center backdrop-blur-xl">
          {isCreatePlaylistOpen && (
            <div className="w-[750px]">
              <CreatePlaylist onChangeCreatePlaylist={(value) => onChangeCreatePlaylist(value)} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10 py-10">
          <PlaylistButton />
        </div>
      </div>
    </>
  );
};
