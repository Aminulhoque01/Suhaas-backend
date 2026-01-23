"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_service_1 = require("./user.service");
const registerUser = async (req, res, next) => {
    try {
        const user = await user_service_1.userService.registerUser(req.body);
        res.status(201).json({
            message: 'User registered successfully',
            user,
        });
    }
    catch (error) {
        next(error);
    }
};
const getUsers = async (req, res) => {
    const users = await user_service_1.userService.getUsers(Number(req.query.page), Number(req.query.limit));
    res.json(users);
};
const changeRole = async (req, res) => {
    const user = await user_service_1.userService.updateUserRole(req.params.id, req.body.role);
    res.json(user);
};
const changeStatus = async (req, res) => {
    const user = await user_service_1.userService.updateUserStatus(req.params.id, req.body.status);
    res.json(user);
};
exports.UserController = {
    registerUser,
    getUsers,
    changeRole,
    changeStatus
};
//# sourceMappingURL=user.controller.js.map