import { UserRole } from "../../types/enums";
interface RegisterUserInput {
    name: string;
    email: string;
    password: string;
    role?: UserRole;
}
export declare const registerUser: (payload: RegisterUserInput) => Promise<{
    id: import("mongoose").Types.ObjectId;
    name: string | null | undefined;
    email: string | null | undefined;
    role: import("./user.module").UserRole | null | undefined;
    status: import("./user.module").UserStatus;
}>;
export declare const userService: {
    registerUser: (payload: RegisterUserInput) => Promise<{
        id: import("mongoose").Types.ObjectId;
        name: string | null | undefined;
        email: string | null | undefined;
        role: import("./user.module").UserRole | null | undefined;
        status: import("./user.module").UserStatus;
    }>;
    getUsers: (page?: number, limit?: number) => Promise<(import("mongoose").Document<unknown, {}, {
        status: import("./user.module").UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: import("./user.module").UserRole | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        status: import("./user.module").UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: import("./user.module").UserRole | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    })[]>;
    updateUserRole: (id: string, role: string) => Promise<(import("mongoose").Document<unknown, {}, {
        status: import("./user.module").UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: import("./user.module").UserRole | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        status: import("./user.module").UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: import("./user.module").UserRole | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
    updateUserStatus: (id: string, status: string) => Promise<(import("mongoose").Document<unknown, {}, {
        status: import("./user.module").UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: import("./user.module").UserRole | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, {
        timestamps: true;
    }> & Omit<{
        status: import("./user.module").UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: import("./user.module").UserRole | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }) | null>;
};
export {};
//# sourceMappingURL=user.service.d.ts.map