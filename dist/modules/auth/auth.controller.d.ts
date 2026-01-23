import { NextFunction, Request, Response } from "express";
export declare const AuthController: {
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    invite: (req: Request, res: Response) => Promise<void>;
    registerViaInvite: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=auth.controller.d.ts.map