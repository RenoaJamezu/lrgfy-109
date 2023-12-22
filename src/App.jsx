import { BrowserRouter as Routers, Routes, Route } from "react-router-dom";
import './App.css'
import { Mainpage } from "./pages/Mainpage";
import { Login } from "./pages/authentication/Login";
import { Signup } from "./pages/authentication/Signup";
import { Library } from "./pages/dashboard/Library";
import { AllSongs } from "./pages/dashboard/AllSongs";
import { MyPlaylist } from "./pages/MyPlaylist";
import { CreatePlaylist } from "./pages/CreatePlaylist";
import { AddSong } from "./pages/AddSong";
import { AddSongPlaylist } from "./pages/AddSongPlaylist";
import { Protected } from "./utils/Protected";



function App() {

  return (
    <>
      <Routers>
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route element={<Protected />}>
            <Route path="/library" element={<Library />} />
            <Route path="/all-songs" element={<AllSongs />} />
            <Route path="/playlist/:id" element={<MyPlaylist />} />
            <Route path="/create-playlist" element={<CreatePlaylist />} />
            <Route path="/add-song" element={<AddSong />} />
            <Route path="/add-song-playlist" element={<AddSongPlaylist />} />
          </Route>
        </Routes>
      </Routers>
    </>
  )
}

export default App
