import { UserRole } from '../../types/enums';
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
//# sourceMappingURL=invite.interface.d.ts.map