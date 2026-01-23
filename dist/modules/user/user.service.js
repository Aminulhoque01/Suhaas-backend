"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = exports.registerUser = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const enums_1 = require("../../types/enums");
const ApiError_1 = require("../../utils/ApiError");
const user_module_1 = require("./user.module");
const normalizeEmail = (email) => email.toLowerCase().trim();
const registerUser = async (payload) => {
    const { name, email, password, role } = payload;
    const normalizedEmail = normalizeEmail(email);
    // 🔍 Check existing user
    const existingUser = await user_module_1.User.findOne({ email: normalizedEmail });
    if (existingUser) {
        throw new ApiError_1.ApiError(409, 'User already exists');
    }
    // 🔐 Hash password
    const hashedPassword = await bcryptjs_1.default.hash(password, 10);
    // 👤 Create user
    const user = await user_module_1.User.create({
        name,
        email: normalizedEmail,
        password: hashedPassword,
        role: role || enums_1.UserRole.STAFF,
        status: enums_1.UserStatus.ACTIVE, // IMPORTANT
    });
    // ❌ Never return password
    return {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        status: user.status,
    };
};
exports.registerUser = registerUser;
const getUsers = async (page = 1, limit = 10) => {
    return user_module_1.User.find()
        .skip((page - 1) * limit)
        .limit(limit);
};
const updateUserRole = async (id, role) => {
    return user_module_1.User.findByIdAndUpdate(id, { role }, { new: true });
};
const updateUserStatus = async (id, status) => {
    return user_module_1.User.findByIdAndUpdate(id, { status }, { new: true });
};
exports.userService = {
    registerUser: exports.registerUser,
    getUsers,
    updateUserRole,
    updateUserStatus,
};
//# sourceMappingURL=user.service.js.map