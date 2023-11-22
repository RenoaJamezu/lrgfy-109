export const Sidebar = () => {
  return (
    <>
      <div className="fixed flex flex-col h-screen bg-tertiaryColor w-[380px]">
        <div className="text-center text-primaryColor font-bold text-[24px] py-5 border-b-2 border-primaryColor bg-transparent">
          LRGfy
        </div>
        <div className="p-10 flex flex-col justify-between h-full bg-transparent">
          <div className="bg-transparent">
            <div className="bg-transparent pb-5">
              <input
                type="text"
                placeholder="Search Song"
                className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-full w-full outline-none text-white bg-transparent"
              />
            </div>
            <button
              type="submit"
              // onClick={handleLogout}
              className="bg-primaryColor text-secondaryColor px-2 h-10 rounded-full w-full text-sm font-bold"
            >
              Create Playlist
            </button>
          </div>
          <button
            type="submit"
            // onClick={handleLogout}
            className="bg-primaryColor text-secondaryColor px-2 h-10 rounded-full w-full text-sm font-bold"
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};