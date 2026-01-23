import bcrypt from "bcryptjs";
import { UserRole, UserStatus } from "../../types/enums.js";
import { ApiError } from "../../utils/ApiError.js";
import { User } from "./user.module.js";
const normalizeEmail = (email) => email.toLowerCase().trim();
export const registerUser = async (payload) => {
    const { name, email, password, role } = payload;
    const normalizedEmail = normalizeEmail(email);
    // 🔍 Check existing user
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
        throw new ApiError(409, 'User already exists');
    }
    // 🔐 Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    // 👤 Create user
    const user = await User.create({
        name,
        email: normalizedEmail,
        password: hashedPassword,
        role: role || UserRole.STAFF,
        status: UserStatus.ACTIVE, // IMPORTANT
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
const getUsers = async (page = 1, limit = 10) => {
    return User.find()
        .skip((page - 1) * limit)
        .limit(limit);
};
const updateUserRole = async (id, role) => {
    return User.findByIdAndUpdate(id, { role }, { new: true });
};
const updateUserStatus = async (id, status) => {
    return User.findByIdAndUpdate(id, { status }, { new: true });
};
export const userService = {
    registerUser,
    getUsers,
    updateUserRole,
    updateUserStatus,
};
