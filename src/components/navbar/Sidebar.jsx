import { Link, useNavigate } from "react-router-dom"

export const Sidebar = () => {
  const navigator = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    localStorage.clear();
    navigator("/");
  }

  return (
    <>
      <div className="fixed h-screen bg-tertiaryColor w-[300px]">
        <div className="flex flex-col">
          <div className="flex justify-center items-center h-[100px] gap-3 border-b-2 border-primaryColor">
            <img
              src="/static/icons/LRGfy-LOGO.png"
              alt="LOGO"
              className="h-[50px]" />
            <h1 className="text-primaryColor font-bold text-3xl">LRGfy</h1>
          </div>
          <Link to="/library">
            <div className="border-b-2 border-primaryColor text-primaryColor font-medium text-2xl p-3">
              Library
            </div>
          </Link>
          <Link to="/all-songs">
            <div className="border-b-2 border-primaryColor text-primaryColor font-medium text-2xl p-3">
              All Songs
            </div>
          </Link>
          <div className="absolute left-24 bottom-0">
            <button
              onClick={handleLogout}
              className="text-primaryColor font-medium text-2xl p-3"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  )
}