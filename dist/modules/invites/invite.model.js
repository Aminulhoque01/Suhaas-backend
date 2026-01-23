import { Schema, model } from 'mongoose';
import { UserRole } from '../../types/enums.js';
const inviteSchema = new Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true,
    },
    role: {
        type: String,
        enum: Object.values(UserRole),
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
export const Invite = model('Invite', inviteSchema);
