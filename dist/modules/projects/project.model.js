import mongoose, { Schema } from 'mongoose';
const projectSchema = new Schema({
    name: { type: String, required: true, trim: true },
    description: { type: String, default: '' },
    status: { type: String, enum: ['ACTIVE', 'INACTIVE', 'DELETED'], default: 'ACTIVE' },
    isDeleted: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });
export const Project = mongoose.model('Project', projectSchema);
