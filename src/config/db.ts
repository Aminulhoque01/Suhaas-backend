import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectDB = async () => {
  if (isConnected) return;

  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("MONGO_URI is not defined");

  try {
    await mongoose.connect(uri);
    isConnected = true;
    console.log("MongoDB connected ✅");
  } catch (err) {
    console.error("MongoDB connection failed ❌", err);
    throw err;
  }
};
