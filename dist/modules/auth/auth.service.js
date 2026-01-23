"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const crypto_1 = __importDefault(require("crypto"));
const user_module_1 = require("../user/user.module");
const ApiError_1 = require("../../utils/ApiError");
const password_1 = require("../../utils/password");
const jwt_1 = require("../../utils/jwt");
const invite_model_1 = require("../invites/invite.model");
const normalizeEmail = (email) => email.toLowerCase().trim();
const login = async (email, password) => {
    const user = await user_module_1.User.findOne({
        email: normalizeEmail(email),
    });
    if (!user) {
        throw new ApiError_1.ApiError(401, 'User not found');
    }
    if (user.status !== 'ACTIVE') {
        throw new ApiError_1.ApiError(403, 'User is inactive');
    }
    const isMatch = await (0, password_1.comparePassword)(password, user.password);
    if (!isMatch) {
        throw new ApiError_1.ApiError(401, 'Invalid credentials');
    }
    return (0, jwt_1.signToken)({ id: user._id, role: user.role });
};
const inviteUser = async (email, role) => {
    const token = crypto_1.default.randomBytes(32).toString('hex');
    return invite_model_1.Invite.create({
        email,
        role,
        token,
        expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
    });
};
const registerViaInvite = async (token, name, password) => {
    const invite = await invite_model_1.Invite.findOne({ token, acceptedAt: null });
    if (!invite || invite.expiresAt < new Date()) {
        throw new ApiError_1.ApiError(400, 'Invite expired or invalid');
    }
    // 🔥 CHECK EXISTING USER
    const existingUser = await user_module_1.User.findOne({ email: invite.email });
    if (existingUser) {
        throw new ApiError_1.ApiError(409, 'User already registered with this email');
    }
    const user = await user_module_1.User.create({
        name,
        email: invite.email.toLowerCase().trim(),
        role: invite.role,
        password: await (0, password_1.hashPassword)(password),
        status: 'ACTIVE',
        invitedAt: new Date(),
    });
    invite.acceptedAt = new Date();
    await invite.save();
    return {
        id: user._id,
        email: user.email,
        role: user.role,
    };
};
exports.AuthService = {
    login,
    inviteUser,
    registerViaInvite
};
//# sourceMappingURL=auth.service.js.map