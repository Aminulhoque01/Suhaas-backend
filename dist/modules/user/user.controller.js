import { userService } from "./user.service";
const registerUser = async (req, res, next) => {
    try {
        const user = await userService.registerUser(req.body);
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
    const users = await userService.getUsers(Number(req.query.page), Number(req.query.limit));
    res.json(users);
};
const changeRole = async (req, res) => {
    const user = await userService.updateUserRole(req.params.id, req.body.role);
    res.json(user);
};
const changeStatus = async (req, res) => {
    const user = await userService.updateUserStatus(req.params.id, req.body.status);
    res.json(user);
};
export const UserController = {
    registerUser,
    getUsers,
    changeRole,
    changeStatus
};
