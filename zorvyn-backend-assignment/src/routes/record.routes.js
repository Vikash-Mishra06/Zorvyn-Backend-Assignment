// Defines routes for financial record operations.
import express from "express";
import { createRecord, getRecords } from "../controllers/record.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";
import roleMiddleware from "../middleware/role.middleware.js";

const router = express.Router();

// create record → only admin
router.post("/", authMiddleware, roleMiddleware("admin"), createRecord);

// get records → analyst + admin
router.get("/", authMiddleware, roleMiddleware("analyst", "admin"), getRecords);

export default router;
