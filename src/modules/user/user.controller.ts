import { NextFunction, Request, Response } from "express";
import { userService } from "./user.service.js";


const registerUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await userService.registerUser(req.body);
    res.status(201).json({
      message: 'User registered successfully',
      user,
    });
  } catch (error) {
    next(error);
  }
};
 
 

const getUsers = async (req:Request, res:Response) => {
  const users = await userService.getUsers(
    Number(req.query.page),
    Number(req.query.limit)
  );
  res.json(users);
};

const changeRole = async (req:Request, res:Response) => {
  const user = await userService.updateUserRole(req.params.id as string, req.body.role);
  res.json(user);
};

const changeStatus = async (req:Request, res:Response) => {
  const user = await userService.updateUserStatus(
    req.params.id as string,
    req.body.status
  );
  res.json(user);
};


export const UserController={
  registerUser,
  getUsers,
  changeRole,
  changeStatus

}