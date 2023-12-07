import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buildUrl } from "../../utils/buildUrl.js";

export const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email !== "" || password !== "") {
      try {
        let response = await fetch(buildUrl("/auth/login"), {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email,
            password,
          })
        });
        console.log(response.status)
        if (response.status === 201) {
          console.log("Correct password")
          nav("/homepage")
        } else if (response.status === 401){
          console.log("Incorrect Password")
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-secondaryColor">
        <div className="w-[35%] border-2 border-primaryColor rounded-lg shadow-md">
          <div className="p-10 rounded-lg">
            <h1 className="text-primaryColor font-black text-3xl">Login</h1>
            <div className="pt-5">
              <form>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin;
                      }
                    }}
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white bg-secondaryColor" />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleLogin;
                      }
                    }}
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white bg-secondaryColor" />
                </div>
                <div className="flex items center justify-between mt-5">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      placeholder="password"
                      className="text-sm font-light border border-primaryColor px-4 py-2 rounded outline-none" />
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
                    onClick={handleLogin}
                    className="bg-primaryColor text-secondaryColor px-2 h-10 rounded w-full text-sm font-bold hover:text-white transition-colors"
                  >
                    Login
                  </button>
                  <div>
                    <Link to="/signup">
                      <button
                        className="border-2 border-primaryColor text-primaryColor px-2 h-10 rounded w-full text-sm font-bold hover:text-white transition-colors"
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
};