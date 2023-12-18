export const DeletePlaylistButton = () => {
  const handleDeletePlaylist = async (e) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <>
      <div className="fixed bottom-10 right-10">
        <button
          onClick={handleDeletePlaylist}
          className="bg-primaryColor text-black shadow-lg text-xs h-8 rounded-lg px-4 flex items-center gap-2 hover:text-white"
        >
          create playlist
        </button>
      </div>
    </>
  )
}