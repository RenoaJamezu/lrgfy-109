import express, { query } from "express";

const router = express.Router();

import {
  AddSong,
  CreatePlaylist, 
  DeletePlaylist, 
  SelectPlaylist, 
  UserPlaylist,
} from "../controller/Playlist.js"

router.post("/create-playlist", CreatePlaylist);
router.get("/get-user-playlist/:id", UserPlaylist);
router.delete("/delete-playlist/:id", DeletePlaylist);
router.get("/get-playlist/:id", SelectPlaylist);
router.post("/add-song", AddSong);


export { router as PlaylistRouter };