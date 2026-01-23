import { UserRole } from '../../types/enums.js';

export interface IInvite {
  _id: string;
  email: string;
  role: UserRole;
  token: string;
  expiresAt: Date;
  acceptedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
