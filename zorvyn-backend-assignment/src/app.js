import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import recordRoutes from "./routes/record.routes.js";
import dashboardRoutes from "./routes/dashboard.routes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/users", userRoutes);
app.use("/api/records", recordRoutes);
app.use("/api/dashboard", dashboardRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;