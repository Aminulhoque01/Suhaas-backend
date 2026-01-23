"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.UserStatus = exports.UserRole = void 0;
const mongoose_1 = require("mongoose");
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["STAFF"] = "STAFF";
})(UserRole || (exports.UserRole = UserRole = {}));
var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
})(UserStatus || (exports.UserStatus = UserStatus = {}));
const userSchema = new mongoose_1.Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: Object.values(UserRole) },
    status: { type: String, enum: Object.values(UserStatus), default: 'ACTIVE' },
    invitedAt: Date,
}, { timestamps: true });
exports.User = (0, mongoose_1.model)('User', userSchema);
//# sourceMappingURL=user.module.js.map