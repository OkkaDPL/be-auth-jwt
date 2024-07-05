import user from "../models/user.js";
import { isNull } from "../utils/index.js";

async function isExist(field, item) {
  const users = await user.findOne({
    where: { [field]: item },
    attributes: [field],
  });

  return !!users;
}

async function verifyRegister(req, res, next) {
  const { username, password, repassword, email } = req.body;

  try {
    isNull(username, "username");
    isNull(password, "password");
    isNull(repassword, "repassword");
    isNull(email, "email");
    if (password !== repassword) {
      throw new Error("Password dan Re-password tidak sesuai.");
    } else if (await isExist("username", username)) {
      res.status(409).json({ msg: "Username telah digunakan." });
    } else if (await isExist("email", email)) {
      res.status(409).json({ msg: "Email telah digunakan." });
    } else {
      next();
    }
  } catch (error) {
    return res.status(422).json({ msg: error.message });
  }
}

export default verifyRegister;
