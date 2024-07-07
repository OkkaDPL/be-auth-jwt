import express from "express";
import { register, login, refreshToken, logout } from "../controllers/index.js";
import {
  verifyLogin,
  verifyRegister,
  verifyToken,
  verifyRefreshToken,
  verifyLogout,
} from "../middleware/index.js";

const route = express.Router();

route.post("/register", verifyRegister, register);
route.post("/login", verifyLogin, login);
route.post("/refreshtoken", verifyRefreshToken, refreshToken);
route.get("/", verifyToken, (req, res) => {
  res.send("Token lo valid bos");
});
route.delete("/logout", verifyLogout, logout);

export default route;
