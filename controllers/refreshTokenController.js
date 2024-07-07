import jwt from "jsonwebtoken";
import user from "../models/user.js";

async function refreshToken(req, res) {
  const user = req.users;
  const token = jwt.sign(
    {
      username: user.username,
      email: user.email,
    },
    process.env.SECRET_KEY,
    { expiresIn: "15s" }
  );

  res.send(JSON.stringify({ new_token: token }));
}

export default refreshToken;
