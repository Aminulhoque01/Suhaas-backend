import { AuthService } from "./auth.service.js";
const login = async (req, res, next) => {
    try {
        const token = await AuthService.login(req.body.email, req.body.password);
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
};
const invite = async (req, res) => {
    const invite = await AuthService.inviteUser(req.body.email, req.body.role);
    res.status(201).json(invite);
};
const registerViaInvite = async (req, res) => {
    const user = await AuthService.registerViaInvite(req.body.token, req.body.name, req.body.password);
    res.status(201).json(user);
};
export const AuthController = {
    login,
    invite,
    registerViaInvite,
};
