import express from "express";
import cors from "cors";

import userRoutes from "./modules/user/user.route";
import authRoutes from "./modules/auth/auth.routes";
import projectRoutes from "./modules/projects/project.route";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/project", projectRoutes);

app.get("/", (req, res) => {
  res.json({ message: "API is working 🚀" });
});

export default app;
