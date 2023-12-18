// Import necessary dependencies and configurations
import { dbConnection } from "../database/database.js";
import dotenv from "dotenv";
dotenv.config();

// Create Playlist
export const CreatePlaylist = async (req, res) => {
  const { playlist_name, header_url, user_id } = req.body;

  console.log(user_id);
  
  try {
    // Check if the user with the provided user_id exists
    const userExists = await dbConnection.query(
      "SELECT * FROM users WHERE user_id = $1",
      [user_id]
    );

    if (userExists.rows.length === 0) {
      return res.status(400).json({ success: false, error: "User does not exist" });
    }

    // If the user exists, proceed with creating the playlist
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
    console.error(err);

    // Send an error response
    res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
