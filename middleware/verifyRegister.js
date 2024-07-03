import user from "../models/user.js";

function isNull(param) {
  return (
    param === "" ||
    param === null ||
    param === undefined ||
    param.trim() === " "
  );
}

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
    if (isNull(username)) throw new Error("Username tidak boleh kosong.");
    if (isNull(password)) throw new Error("Password tidak boleh kosong.");
    if (isNull(repassword)) throw new Error("Re-password tidak boleh kosong.");
    if (isNull(email)) throw new Error("Email tidak boleh kosong.");
    if (password !== repassword)
      throw new Error("Password dan Re-password tidak sesuai.");
    if (await isExist("username", username))
      res.status(409).json({ msg: "Username telah digunakan." });
    if (await isExist("email", email))
      res.status(409).json({ msg: "Username telah digunakan." });

    next();
  } catch (error) {
    return res.status(422).json({ msg: error.message });
  }
}

export default verifyRegister;
