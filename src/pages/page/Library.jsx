export const Library = () => {

  const handleSearchPlaylist = async () => {
    
  }

  return (
    <>
      <div className="px-10 bg-secondaryColor h-screen">
        <div className="flex items-center justify-between lg:max-w-7xl">
          <div>
            <p className="text-primaryColor font-semibold text-[32px] lg:text-[64px] p-0">My Library</p>
          </div>
          <div className="flex items-center bg-transparent px-10 gap-3 w-[400px]">
            <input
              type="text"
              placeholder="Search Playlist"
              className="text-xs font-light border-2 border-primaryColor px-4 h-10 py-2 rounded-full w-full outline-none text-white bg-transparent"
            />
            <button
              type="submit"
              onClick={handleSearchPlaylist}
              className="bg-primaryColor text-secondaryColor px-5 h-10 rounded-full text-sm font-bold hover:text-white transition-colors"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </>
  )
};