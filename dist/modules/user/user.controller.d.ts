import { NextFunction, Request, Response } from "express";
export declare const UserController: {
    registerUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUsers: (req: Request, res: Response) => Promise<void>;
    changeRole: (req: Request, res: Response) => Promise<void>;
    changeStatus: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map