import user from "../models/user.js";
import bcrypt from "bcrypt";
async function register(req, res) {
  const { username, password, email } = req.body;

  await user.create({
    username: username,
    password: await bcrypt.hash(password, 10),
    email: email,
  });

  res.json({ msg: "Data berhasil ditambahkan." });
}

export default register;
