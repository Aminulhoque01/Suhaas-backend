import { Request } from "express";

export interface JwtPayload {
  id: string;
  role: "ADMIN" | "USER";
  email?: string;
}

// Extend Express Request
declare module "express-serve-static-core" {
  interface Request {
    user?: JwtPayload;
  }
}
