"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invite = void 0;
const mongoose_1 = require("mongoose");
const enums_1 = require("../../types/enums");
const inviteSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
    },
    role: {
        type: String,
        enum: Object.values(enums_1.UserRole),
        required: true,
    },
    token: {
        type: String,
        required: true,
        unique: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    acceptedAt: {
        type: Date,
        default: null,
    },
}, {
    timestamps: true,
});
exports.Invite = (0, mongoose_1.model)('Invite', inviteSchema);
//# sourceMappingURL=invite.model.js.map