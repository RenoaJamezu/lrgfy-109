import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { buildUrl } from "../../utils/buildUrl.js";

export const Signup = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const nav = useNavigate();


  const handleSignup = async (e) => {
    e.preventDefault();

    if (password === cpassword) {
      try {
        let response = await fetch(buildUrl("/auth/signup"), {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },    
          body: JSON.stringify({
            username, email, password,
          })
        })
        
        if (response.status === 201) {
          nav("/login")
        }
      } catch (error) {
        console.log(error)
      }
    } else {
      console.log("Password does not match!");
    }
  }


  return (
    <>
      <div className="flex items-center justify-center w-full h-screen">
        <div className="w-[35%] border-2 border-primaryColor rounded-lg shadow-md">
          <div className="p-10 rounded-lg">
            <h1 className="text-primaryColor font-black text-3xl">Create an Account</h1>
            <div className="pt-5">
              <form>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                  />
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex flex-col py-2 w-full">
                    <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                    />
                  </div>
                  <div className="flex flex-col py-2 w-full">
                    <label htmlFor="" className="text-sm font-medium text-primaryColor py-2">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      value={cpassword}
                      onChange={(e) => setCpassword(e.target.value)}
                      placeholder="Confirm password"
                      className="text-xs font-light border border-primaryColor px-4 h-10 py-2 rounded-lg outline-none text-white"
                    />
                  </div>
                </div>
                <div className="mt-10 space-y-3">
                  <button
                    type="submit"
                    onClick={handleSignup}
                    className="bg-primaryColor text-secondaryColor px-2 h-10 rounded w-full text-sm font-bold hover:text-white transition-colors"
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