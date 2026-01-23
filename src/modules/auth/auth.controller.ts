import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service.js";



const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await AuthService.login(
      req.body.email,
      req.body.password
    );
    res.json({ token });
  } catch (error) {
    next(error);
  }
};


const invite = async (req:Request, res:Response) => {
  const invite = await AuthService.inviteUser(req.body.email, req.body.role);
  res.status(201).json(invite);
};

const registerViaInvite = async (req:Request, res:Response) => {
  const user = await AuthService.registerViaInvite(
    req.body.token,
    req.body.name,
    req.body.password
  );
  res.status(201).json(user);
};


export const AuthController={
  
  login,
  invite,
  registerViaInvite,
}