import { UserRole } from '../../types/enums.js';

export interface CreateInviteDTO {
  email: string;
  role: UserRole;
}

export interface RegisterViaInviteDTO {
  token: string;
  name: string;
  password: string;
}
