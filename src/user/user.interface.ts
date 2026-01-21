import { UserRole, UserStatus } from '../types/enums';

export interface IUser {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: UserRole;
  status: UserStatus;
  invitedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
