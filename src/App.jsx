import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import './App.css'

import Mainpage from './dashboard/Mainpage';
import Login from './authentication/Login';
import Signup from "./authentication/Signup";
import Layout from "./dashboard/Layout";

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path='/login' element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/homepage" element={<Layout />}/>
        </Routes>
      </Routers>
    </>
  )
}

export default App
