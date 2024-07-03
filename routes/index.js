import express from "express";
import { register } from "../controllers/index.js";
import verifyRegister from "../middleware/verifyRegister.js";

const route = express.Router();

route.post("/register", verifyRegister, register);

export default route;
