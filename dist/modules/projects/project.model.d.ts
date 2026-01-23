import mongoose from 'mongoose';
import { IProject } from './project.interface';
export declare const Project: mongoose.Model<IProject, {}, {}, {}, mongoose.Document<unknown, {}, IProject, {}, mongoose.DefaultSchemaOptions> & IProject & Required<{
    _id: mongoose.Types.ObjectId;
}> & {
    __v: number;
} & {
    id: string;
}, any, IProject>;
//# sourceMappingURL=project.model.d.ts.map