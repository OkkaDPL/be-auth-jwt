import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!!token) {
      const isActive = jwt.verify(token, process.env.SECRET_KEY);
      if (isActive) {
        next();
      } else {
        throw new Error("Expired Token!");
      }
    } else {
      throw new Error({ msg: "Invalid token!" });
    }
  } catch (error) {
    return res.status(401).json({ error: error.name, msg: error.message });
  }
}

export default verifyToken;
