import { UserRole, UserStatus } from '../../types/enums';
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
export interface ILoginDTO {
    email: string;
    password: string;
}
export interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    role: UserRole;
}
//# sourceMappingURL=user.interface.d.ts.map