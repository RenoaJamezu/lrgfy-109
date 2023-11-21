import bcrypt from 'bcrypt';
import { dbConnection } from "../database/database.js";
import dotenv from "dotenv";
dotenv.config();

// signup endpoint
const signup = async(req, res) => {
  console.log("test api")
  try {
    const {username, email, password} = req.body;

    // Check if the email already exists
    const existingEmail = await dbConnection.query(
			"SELECT * FROM users WHERE email = $1",
			[email],
		);

		if (existingEmail.rows.length > 0) {
			return res.status(400).json({ message: "User already exists!" });
		}

    // Insert a new user into the database using parameterized query
    const newUserQuery = `INSERT INTO users (username, email, hashed_password)
    VALUES ($1, $2, $3)`;

    const hashed_password = await bcrypt.hash (password, 10);
    await dbConnection.query(newUserQuery, [
      username,
      email,
      hashed_password,
    ]);

    res.status(201).json({ newUserQuery, message: "New user created!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default signup;