import { IoCloseCircleOutline } from "react-icons/io5";

export const CreatePlaylist = ({onChangeCreatePlaylist}) => {

  const handleCreatePlaylist = async () => {

  }

  const handleCloseCreatePlaylist = () => {
    onChangeCreatePlaylist(true)
  }

  return (
    <>
      <div className="fixed top-20 left-0 p-10 border-primaryColor outline-none border rounded-lg h-max w-full bg-tertiaryColor backdrop-filter backdrop-blur-xl">
        <button onClick={handleCloseCreatePlaylist}
        className="fixed right-10 top">
          <IoCloseCircleOutline className="text-primaryColor text-[25px]"/>  
        </button>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
            Playlist Name
          </label>
          <input
            type="text"
            placeholder="Playlist Name"
            className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white bg-secondaryColor"
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
            Playlist Description
          </label>
          <textarea
            placeholder="Description"
            className="text-xs font-light border border-primaryColor px-4 h-32 py-2 rounded-lg outline-none text-white bg-secondaryColor"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
            Playlist Photo
          </label>
        </div>
        <div className="flex flex-col py-3">
          <button
            type="submit"
            onClick={handleCreatePlaylist}
            className="bg-primaryColor text-secondaryColor px-2 h-10 rounded w-full text-sm font-bold hover:text-white transition-colors"
          >
            Create Playlist
          </button>
        </div>
      </div>
    </>
  )
}