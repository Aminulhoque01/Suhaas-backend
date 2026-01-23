import mongoose from "mongoose";

declare global {
  var mongooseConn: typeof mongoose | null | undefined;
  var mongoosePromise: Promise<typeof mongoose> | null | undefined;
}

export {};
