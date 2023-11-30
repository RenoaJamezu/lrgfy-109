export const CreatePlaylist = () => {

  const handleCreatePlaylist = async () => {

  }

  return (
    <>
      <div className="px-10 w-full bg-secondaryColor h-screen">
        <div>
          <p className="text-primaryColor font-semibold text-[32px] lg:text-[64px] p-00">Create Playlist</p>
        </div>
        <div className="items-center">
          <div className="pt-9">
            <div>
              <input
                type="text"
                placeholder="Playlist Name"
                className="text-xs font-light border-2 border-primaryColor px-4 h-10 py-2 rounded outline-none text-white w-1/4 bg-secondaryColor"
              />
              <button
                type="submit"
                onClick={handleCreatePlaylist}
                className="bg-primaryColor text-secondaryColor px-5 h-10 rounded-full text-sm font-bold hover:text-white transition-colors ml-5"
              >
                Create
              </button>
            </div>
          </div>
          <div className="pt-5">
            <input
              type="text"
              placeholder="Playlist Description"
              className="text-xs font-light border-2 border-primaryColor px-4 h-40 py-2 rounded outline-none text-white w-2/4 bg-secondaryColor"
            />
          </div>
        </div>
      </div>
    </>
  )
}