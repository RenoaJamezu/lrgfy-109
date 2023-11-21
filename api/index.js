import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { dbConnection } from "./database/database";
import { UserRouter } from "./routes/Router";

const app = express();
app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
	cors({
		origin: "*",
		methods: ["GET", "POST", "PUT", "DELETE"],
		credentials: true,
	}),
);

app.use("/api/auth", UserRouter);

// Database vercel
dbConnection
  .connect()
  .then(() => {
    console.log("Postgre connection success");
  })
  .catch((err) => {
    console.log("Error connecting with vercel postgre DB");
    console.log(err);
  });

app.listen(3000, ()=> console.log("port listening to 3000"))