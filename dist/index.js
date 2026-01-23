import dotenv from "dotenv";
import app from "./app";
import { connectDB } from "./config/bd";
dotenv.config();
const PORT = process.env.PORT || 5000;
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`🚀 Server running on port ${PORT}`);
        });
    }
    catch (error) {
        console.error("❌ Server failed to start:", error);
    }
};
startServer();
