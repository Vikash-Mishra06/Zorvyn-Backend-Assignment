// Defines routes for dashboard summary and analytics.
import express from "express";
import authMiddleware from "../middleware/auth.middleware.js";
import { getSummary, getCategorySummary, getRecent } from "../controllers/dashboard.controller.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

// get dashboard summary
router.get("/summary", authMiddleware, roleMiddleware("analyst", "admin"), getSummary );

// category breakdown
router.get("/categories", authMiddleware, roleMiddleware("analyst", "admin"), getCategorySummary );

// recent records
router.get("/recent", authMiddleware, roleMiddleware("analyst", "admin"), getRecent );

export default router;