import { Schema, model } from 'mongoose';

export enum UserRole {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
  STAFF = 'STAFF'
}

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE'
}

const userSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: Object.values(UserRole) },
  status: { type: String, enum: Object.values(UserStatus), default: 'ACTIVE' },
  invitedAt: Date,
}, { timestamps: true });

export const User = model('User', userSchema);
