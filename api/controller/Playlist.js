import { dbConnection } from "../database/database.js";
import dotenv from "dotenv";
dotenv.config();

export const CreatePlaylist = async (req, res) => {
  const {
    playlist_name,
    user_id,
    header_url,
  } = req.body;

  try {
    const newPlaylistQuery = `
      INSERT INTO playlist (playlist_name, user_id, header_url)
      VALUES ($1, $2, $3)
      RETURNING playlist_id;
    `;

    const playlistResult = await dbConnection.query(newPlaylistQuery, [
      playlist_name,
      user_id,
      header_url,
    ]);
    const playlist_id = playlistResult.rows[0].playlist_id;

    // Send a success response with the playlist_id
    res.status(201).json({ success: true, playlist_id });
  } catch (err) {
    console.log(err);

    // Send an error response
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
}