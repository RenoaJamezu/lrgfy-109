import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";

export const Navbar = () => {
  return (
    <>
      <div className="fixed w-full border-b-2 border-primaryColor">
        <div className="bg-secondaryColor flex justify-between items-center py-3 px-20">
          <div className="flex items-center gap-3">
            <img
              src="/static/icons/LRGfy-LOGO.png"
              alt="LOGO"
              className="h-[50px]"/>
            <h1 className="text-primaryColor font-bold text-3xl">LRGfy</h1>
          </div>
          <Link to="/login">
            <div className="flex items-center gap-2 bg-primaryColor font-medium text-secondaryColor h-10 px-4 rounded-full hover:text-white transition-colors">
              <HiUser className="bg-transparent" size={20}/>
              Account
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}