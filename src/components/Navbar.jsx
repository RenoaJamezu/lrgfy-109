import { Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";

export const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="border-primaryColor border-b-2 py-4">
          <div className="flex items-center justify-between lg:max-w-7xl mx-36 2xl:mx-auto">
            <div className="flex gap-2">
              <img
                src="/static/icons/LRGfy-LOGO.png"
                alt="LOGO"
                className="w-[50px]"/>
              <div className="w-[20px] text-primaryColor font-bold text-[30px]">
                LRGfy
              </div>
            </div>
            <Link to="/login">
              <div className="flex items-center gap-10">
                <button className="flex items-center gap-2 bg-primaryColor font-medium text-secondaryColor h-10 px-4 rounded-full hover:text-white transition-colors">
                  <HiUser className="bg-transparent" size={20}/>
                  Account
                </button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}