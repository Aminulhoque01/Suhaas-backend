import mongoose from "mongoose";
import { IProject } from "./project.interface";
export declare const ProjectService: {
    createProject: (data: Partial<IProject>, userId: string) => Promise<mongoose.Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }>;
    getProjects: () => Promise<(mongoose.Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    })[]>;
    updateProject: (id: string, data: Partial<IProject>) => Promise<(mongoose.Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
    softDeleteProject: (id: string) => Promise<(mongoose.Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
        _id: mongoose.Types.ObjectId;
    }> & {
        __v: number;
    } & {
        id: string;
    }) | null>;
};
//# sourceMappingURL=project.service.d.ts.map