import { useState } from "react"
import { Songs } from "../../components/modal/Songs"
import { AddSongs } from "../../components/modal/AddSongs";

export const AllSongs = () => {
  const [isAddSongOpen, setAddSongOpen] = useState(false)

  const handleAddSong = () => {
    setAddSongOpen(!isAddSongOpen)
  };

  const onChangeAddSong = (value) => {
    if (value) {
      setAddSongOpen(false)
    }
  }


  return (
    <>
      <div className="px-10 w-full h-full bg-secondaryColor">
        <div className="flex border-b-2 border-primaryColor justify-between items-center">
          <p className="text-primaryColor font-semibold text-[32px] lg:text-[64px] px-10">All Songs</p>
          <div className="bg-transparent px-10">
            <button
              type="submit"
              onClick={handleAddSong}
              className="bg-primaryColor text-secondaryColor px-10 h-10 rounded-full w-full text-sm font-bold hover:text-white transition-colors"
            >
              {isAddSongOpen ? "Close" : "Add Song"}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center backdrop-blur-xl">
          {isAddSongOpen && (
            <div className="w-[750px]">
              <AddSongs onChangeAddSong={(value) => onChangeAddSong(value)} />
            </div>
          )}
        </div>
        <div className="flex flex-col gap-10 py-10">
          <Songs />
        </div>
      </div>
    </>
  )
}