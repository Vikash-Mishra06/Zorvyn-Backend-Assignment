import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;