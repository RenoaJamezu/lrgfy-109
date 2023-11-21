import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import './App.css'

import Mainpage from './dashboard/Mainpage';
import Login from './authentication/Login';
import Signup from "./authentication/Signup";

function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path='/login' element={<Login />}/>
          <Route path="/signup" element={<Signup />}/>
        </Routes>
      </Routers>
    </>
  )
}

export default App
