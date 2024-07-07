async function logout(req, res) {
  const user = req.user;

  try {
    await user.update({ refresh_token: null });
    res.cookie("token", "");

    res.json({ msg: "Anda berhasil logout" });
  } catch (error) {
    res.status(500).json({ error: error.mesaage });
  }
}

export default logout;
