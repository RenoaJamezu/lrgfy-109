import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full">
        <div className="border-primaryColor border-b-2 py-4">
          <div className="flex items-center justify-between lg:max-w-7xl mx-36 2xl:mx-auto">
            <div className="w-[20px] text-white font-bold text-[20px]">
              LRGfy
            </div>
            <Link to="/login">
              <div className="flex items-center gap-10">
                <button className="bg-primaryColor font-medium text-[20px}text-secondaryColor h-10 px-4 rounded-full">
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

export default Navbar;