import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import {
  getSummary,
  getCategorySummary,
  getRecent,
} from "../controllers/dashboard.controller.js";

const router = express.Router();

router.get("/summary", authMiddleware, getSummary);
router.get("/categories", authMiddleware, getCategorySummary);
router.get("/recent", authMiddleware, getRecent);

export default router;