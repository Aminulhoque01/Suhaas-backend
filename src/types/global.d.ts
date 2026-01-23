// global.d.ts
import mongoose from "mongoose";

declare global {
  var mongooseConn: mongoose.Connection | null;
  var mongoosePromise: Promise<mongoose.Connection> | null;
}

export {};
