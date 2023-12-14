import { IoCloseCircleOutline } from "react-icons/io5";

export const AddSongs = ({onChangeAddSong}) => {

  const handleAddSong = async () => {

  }

  const handleCloseAddSong = () => {
    onChangeAddSong(true)
  }

  return (
    <>
      <div className="fixed top-20 left-0 p-10 border-primaryColor outline-none border rounded-lg h-max w-full bg-tertiaryColor backdrop-filter backdrop-blur-xl">
        <button onClick={handleCloseAddSong}
        className="fixed right-10 top">
          <IoCloseCircleOutline className="text-primaryColor text-[25px]"/>  
        </button>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
            Song Name
          </label>
          <input
            type="text"
            placeholder="Song Name"
            className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white bg-secondaryColor"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
            Song File
          </label>
        </div>
        <div className="flex flex-col py-3">
          <button
            type="submit"
            onClick={handleAddSong}
            className="bg-primaryColor text-secondaryColor px-2 h-10 rounded w-full text-sm font-bold hover:text-white transition-colors"
          >
            Add Song
          </button>
        </div>
      </div>
    </>
  )
}