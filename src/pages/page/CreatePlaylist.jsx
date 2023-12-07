export const CreatePlaylist = () => {

  const handleCreatePlaylist = async () => {

  }

  return (
    <>
      <div className="px-10 w-full bg-secondaryColor h-screen">
        <div className="border-b-2 border-primaryColor mb-10">
          <p className="text-primaryColor font-semibold text-[32px] lg:text-[64px] p-00">Create Playlist</p>
        </div>
        <div className="p-10 border-primaryColor outline-none border rounded-lg">
          <div className="flex flex-col py-2">
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
      </div>
    </>
  )
}