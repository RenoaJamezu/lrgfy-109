import express, { query } from "express";

import {
  CreatePlaylist
} from "../controller/Playlist.js"

router.post("/create-playlist", CreatePlaylist);


export { router as PlaylistRouter };