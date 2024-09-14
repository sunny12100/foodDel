import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

const adminMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({ success: false, message: "Not Authorized Login Again" });
  }
  try {
    const decrypt = jwt.verify(token, process.env.JWT_SECRET);
    const user = await userModel.findById(decrypt.id);

    if (!user) {
      return res.json({ success: false, messsage: "User not Found" });
    }
    if (user.isAdmin) {
      req.user = user; // Attach the user object to the request
      next(); // User is an admin, proceed
    } else {
      res.status(403).json({ message: "Access denied. Admins only." });
    }
  } catch (error) {
    res.status(401).json({ message: "Invalid token." });
  }
};

export default adminMiddleware;
