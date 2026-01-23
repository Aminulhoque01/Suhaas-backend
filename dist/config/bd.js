import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
    throw new Error(" MONGO_URI is not defined");
}
export const connectDB = async () => {
    if (global.mongooseConn) {
        return global.mongooseConn;
    }
    if (!global.mongoosePromise) {
        global.mongoosePromise = mongoose.connect(MONGO_URI);
    }
    global.mongooseConn = await global.mongoosePromise;
    console.log(" MongoDB connected");
    return global.mongooseConn;
};
