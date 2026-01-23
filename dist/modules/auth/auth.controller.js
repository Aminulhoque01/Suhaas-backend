"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("./auth.service");
const login = async (req, res, next) => {
    try {
        const token = await auth_service_1.AuthService.login(req.body.email, req.body.password);
        res.json({ token });
    }
    catch (error) {
        next(error);
    }
};
const invite = async (req, res) => {
    const invite = await auth_service_1.AuthService.inviteUser(req.body.email, req.body.role);
    res.status(201).json(invite);
};
const registerViaInvite = async (req, res) => {
    const user = await auth_service_1.AuthService.registerViaInvite(req.body.token, req.body.name, req.body.password);
    res.status(201).json(user);
};
exports.AuthController = {
    login,
    invite,
    registerViaInvite,
};
//# sourceMappingURL=auth.controller.js.map