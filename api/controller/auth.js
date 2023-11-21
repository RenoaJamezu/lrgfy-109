import bcrypt from 'bcrypt';
import { dbConnection } from "../database/database.js";
import dotenv from "dotenv";
dotenv.config();

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the email already exists
    const existingEmail = await dbConnection.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (existingEmail.rows.length > 0) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    // Insert a new user into the database using parameterized query
    const hashed_password = await bcrypt.hash(password, 10);
    const newUserQuery = {
      text: `INSERT INTO users (username, email, hashed_password) VALUES ($1, $2, $3)`,
      values: [username, email, hashed_password],
    };

    await dbConnection.query(newUserQuery);

    res.status(201).json({ message: "New user created successfully." });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error." });
  }
};

export default signup;
