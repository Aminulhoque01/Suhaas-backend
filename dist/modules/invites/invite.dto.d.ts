import { UserRole } from '../../types/enums';
export interface CreateInviteDTO {
    email: string;
    role: UserRole;
}
export interface RegisterViaInviteDTO {
    token: string;
    name: string;
    password: string;
}
//# sourceMappingURL=invite.dto.d.ts.map