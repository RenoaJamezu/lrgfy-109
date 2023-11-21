import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-[35%] border-2 border-primaryColor rounded-lg shadow-md">
          <div className="p-10">
            <h1 className="text-primaryColor font-black text-3xl">Login</h1>
            <div className="pt-5">
              <form>
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
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                  />
                </div>
                <div className="flex items center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      placeholder="password"
                      className="text-sm font-light border border-primaryColor px-4 py-2 rounded outline-none"
                    />
                    <label htmlFor="" className="text-xs text-primaryColor">
                      Remember me
                    </label>
                  </div>
                  <div>
                    <p className="text-xs text-primaryColor">
                      Forgot Password?
                    </p>
                  </div>
                </div>
                <div className="mt-10 space-y-3">
                  <button
                  type="submit"
                  className="bg-primaryColor text-secondaryColor px-2 h-10 rounded w-full text-sm font-bold"
                  >
                    Login
                  </button>
                  <div>
                    <Link to="/signup">
                      <button
                      className="border-2 border-primaryColor text-primaryColor px-2 h-10 rounded w-full text-sm font-bold"
                      >
                        Signup
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;