import user from "../models/user.js";
import jwt from "jsonwebtoken";

async function verifyRefreshToken(req, res, next) {
  const token = req.cookies.token;

  try {
    if (!!token) {
      const users = await user.findOne({ where: { refresh_token: token } });
      if (!!users) {
        jwt.verify(token, process.env.PRIVATE_SECRET_KEY, (err, decode) => {
          if (err) {
            res.status(403).json({ msg: err.message });
          } else {
            req.users = users;
            next();
          }
        });
      } else {
        res.status(401).json({ msg: "Invalid token, please login again." });
      }
    } else {
      res
        .status(401)
        .json({ msg: "Log in first, you are not logged in yet.." });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
}

export default verifyRefreshToken;
