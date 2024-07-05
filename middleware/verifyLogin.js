import user from "../models/user.js";
import bcrypt from "bcrypt";
import { isNull } from "../utils/index.js";

async function verifyLogin(req, res, next) {
  const { username, password } = req.body;

  try {
    isNull(username, "username");
    isNull(password, "password");

    const users = await user.findOne({
      where: { username: username },
    });

    if (!!users && (await bcrypt.compare(password, users.password))) {
      req.users = users;
      next();
    } else {
      res.status(401).json({ msg: "Username/password salah." });
    }
  } catch (error) {
    if (error instanceof Error) {
      res.status(422).json({ msg: error.message });
    } else {
      res.status(500).json({ msg: error.message });
    }
  }
}

export default verifyLogin;
