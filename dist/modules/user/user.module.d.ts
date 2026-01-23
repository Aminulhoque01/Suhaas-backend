import { Schema } from 'mongoose';
export declare enum UserRole {
    ADMIN = "ADMIN",
    MANAGER = "MANAGER",
    STAFF = "STAFF"
}
export declare enum UserStatus {
    ACTIVE = "ACTIVE",
    INACTIVE = "INACTIVE"
}
export declare const User: import("mongoose").Model<{
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
} & import("mongoose").DefaultTimestampProps, {}, {}, {
    id: string;
}, import("mongoose").Document<unknown, {}, {
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, {
    timestamps: true;
}> & Omit<{
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, Schema<any, import("mongoose").Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, {
    timestamps: true;
}, {
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
} & import("mongoose").DefaultTimestampProps, import("mongoose").Document<unknown, {}, {
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
} & import("mongoose").DefaultTimestampProps, {
    id: string;
}, import("mongoose").ResolveSchemaOptions<{
    timestamps: true;
}>> & Omit<{
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
} & import("mongoose").DefaultTimestampProps & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: import("mongoose").SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: import("mongoose").SchemaDefinitionProperty<any, any, import("mongoose").Document<unknown, {}, {
        status: UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: UserRole | null;
    } & import("mongoose").DefaultTimestampProps, {
        id: string;
    }, import("mongoose").ResolveSchemaOptions<{
        timestamps: true;
    }>> & Omit<{
        status: UserStatus;
        name?: string | null;
        password?: string | null;
        invitedAt?: NativeDate | null;
        email?: string | null;
        role?: UserRole | null;
    } & import("mongoose").DefaultTimestampProps & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>, {
    status: UserStatus;
    name?: string | null;
    password?: string | null;
    invitedAt?: NativeDate | null;
    email?: string | null;
    role?: UserRole | null;
    createdAt: NativeDate;
    updatedAt: NativeDate;
} & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=user.module.d.ts.map