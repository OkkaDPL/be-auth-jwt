import jwt from "jsonwebtoken";

async function login(req, res) {
  const { username, email } = req.body;

  try {
    const token = jwt.sign(
      { username: username, password: email },
      process.env.SECRET_KEY,
      { expiresIn: "30s" }
    );

    const refresh_token = jwt.sign(
      { username: username, password: email },
      process.env.PRIVATE_SECRET_KEY,
      { expiresIn: "1d" }
    );

    const user = req.users;
    res.cookie;
    await user.update({ refresh_token: refresh_token });
    res.cookie("token", token, { maxAge: 30000 });

    res.end("oke");
  } catch (error) {
    res.status(500).json({ msg: error });
  }
}

export default login;
