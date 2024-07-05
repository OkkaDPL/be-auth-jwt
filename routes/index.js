import express from "express";
import { register, login } from "../controllers/index.js";
import { verifyLogin, verifyRegister } from "../middleware/index.js";

const route = express.Router();

route.post("/register", verifyRegister, register);
route.post("/login", verifyLogin, login);
route.get("/", (req, res) => {
  console.log(req.cookies);
  res.end("TEST");
});

export default route;
