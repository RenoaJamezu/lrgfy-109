import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-[35%] border-2 border-primaryColor rounded-lg shadow-md">
          <div className="p-10">
            <h1 className="text-primaryColor font-black text-3xl">Create an Account</h1>
            <div className="pt-5">
              <form>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Username
                  </label>
                  <input
                    type="username"
                    placeholder="Enter your username"
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex flex-col py-2 w-full">
                    <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                    />
                  </div>
                  <div className="flex flex-col py-2 w-full">
                    <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                    />
                  </div>
                </div>
                <div className="mt-10 space-y-3">
                  <button
                    type="submit"
                    className="bg-primaryColor text-secondaryColor px-2 h-10 rounded w-full text-sm font-bold"
                  >
                    Register
                  </button>
                  <p className="text-xs text-primaryColor">
                    Have an account?
                    <Link to="/login">
                      <u>Login</u>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;