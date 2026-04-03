import express from "express";
import { createUser } from "../controllers/user.controller.js";

const router = express.Router();

// create user
router.post("/create", createUser);

export default router;