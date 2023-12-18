import express, { query } from "express";

const router = express.Router();

import {
  CreatePlaylist, 
  UserPlaylist,
} from "../controller/Playlist.js"

router.post("/create-playlist", CreatePlaylist);
router.get("/get-user-playlist/:id", UserPlaylist);


export { router as PlaylistRouter };