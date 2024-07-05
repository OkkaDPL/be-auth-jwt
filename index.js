import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import db from "./config/database.js";
import route from "./routes/index.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Using library
app.use(cookieParser());
app.use(express.json());
app.use(cors());

// Router
app.use(route);

try {
  db.authenticate();
} catch (error) {}

app.listen(5000, () => {
  console.log(`Server running at: http://localhost:5000`);
});
