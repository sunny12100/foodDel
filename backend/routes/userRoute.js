import express from "express";
import { loginUser, registerUser } from "../controllers/userController.js";
import adminMiddleware from "../middleware/adminAuth.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.get("/admin", adminMiddleware, (req, res) => {
  res
    .status(200)
    .json({ success: true, message: "Welcome to the admin panel" });
});

export default userRouter;
