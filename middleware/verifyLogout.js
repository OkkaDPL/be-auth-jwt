import jwt from "jsonwebtoken";
import user from "../models/user.js";

async function verifyLogout(req, res, next) {
  const token = req.cookies.token;
  try {
    if (!!token) {
      const users = await user.findOne({ where: { refresh_token: token } });
      if (!!users) {
        req.user = users;
        next();
      } else {
        res.status(422).json({ msg: "Tidak ada user yang sedang login!" });
      }
    } else {
      res.status(401).json({ msg: "Token tidak ditemukan." });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export default verifyLogout;
