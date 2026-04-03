import express from "express";
import {
  createRecord,
  getRecords,
} from "../controllers/record.controller.js";
import authMiddleware from "../middleware/auth.middleware.js";

const router = express.Router();

// create record (only logged in users)
router.post("/", authMiddleware, createRecord);

// get records
router.get("/", authMiddleware, getRecords);

export default router;