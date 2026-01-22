 
import { Document, Types } from 'mongoose';

export interface IProject extends Document {
  name: string;
  description?: string;
  status: 'ACTIVE' | 'INACTIVE' | 'DELETED';
  isDeleted: boolean;
  createdBy: Types.ObjectId; // Use Mongoose ObjectId
  createdAt?: Date;
  updatedAt?: Date;
}
