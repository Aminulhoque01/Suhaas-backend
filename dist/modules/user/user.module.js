import { Schema, model } from 'mongoose';
export var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["MANAGER"] = "MANAGER";
    UserRole["STAFF"] = "STAFF";
})(UserRole || (UserRole = {}));
export var UserStatus;
(function (UserStatus) {
    UserStatus["ACTIVE"] = "ACTIVE";
    UserStatus["INACTIVE"] = "INACTIVE";
})(UserStatus || (UserStatus = {}));
const userSchema = new Schema({
    name: String,
    email: { type: String, unique: true },
    password: String,
    role: { type: String, enum: Object.values(UserRole) },
    status: { type: String, enum: Object.values(UserStatus), default: 'ACTIVE' },
    invitedAt: Date,
}, { timestamps: true });
export const User = model('User', userSchema);
