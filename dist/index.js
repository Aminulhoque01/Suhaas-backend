import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/bd";
import userRoutes from "./modules/user/user.route";
import authRoutes from "./modules/auth/auth.routes";
import projectRoutes from "./modules/projects/project.route";
dotenv.config();
const app = express();
// Middleware
app.use(cors());
app.use(express.json());
// Routes
app.get("/health", (req, res) => {
    res.status(200).json({ status: "OK" });
});
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/project", projectRoutes);
// Root route
app.get("/", (req, res) => {
    res.json({ message: "API is working 🚀" });
});
// Server start
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();
        // Start Express server
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Server failed to start:", error);
        process.exit(1);
    }
};
startServer();
