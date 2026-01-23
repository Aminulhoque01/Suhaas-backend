import dotenv from "dotenv";
dotenv.config();
import app from "./app.js";
import { connectDB } from "./config/bd.js";
const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== "production") {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
        console.log(`🚀 Server running on port ${PORT}`);
    });
}
const startServer = async () => {
    try {
        await connectDB();
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
