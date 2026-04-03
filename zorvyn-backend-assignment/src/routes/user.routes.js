// Defines user related api routes.
import express from "express";
import { createUser, loginUser } from "../controllers/user.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// create user
router.post("/create", createUser);

// login user
router.post("/login", loginUser);

// get current user
router.get("/me", authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

export default router;