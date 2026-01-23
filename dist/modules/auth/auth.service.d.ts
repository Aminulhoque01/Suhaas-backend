export declare const AuthService: {
    login: (email: string, password: string) => Promise<string>;
    inviteUser: (email: string, role: string) => Promise<import("mongoose").Document<unknown, {}, import("../invites/invite.interface").IInvite, {}, import("mongoose").DefaultSchemaOptions> & import("../invites/invite.interface").IInvite & Required<{
        _id: string;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    registerViaInvite: (token: string, name: string, password: string) => Promise<{
        id: import("mongoose").Types.ObjectId;
        email: string | null | undefined;
        role: import("../user/user.module").UserRole | null | undefined;
    }>;
};
//# sourceMappingURL=auth.service.d.ts.map