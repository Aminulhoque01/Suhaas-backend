import mongoose from "mongoose";
import { Project } from "./project.model.js";
const createProject = async (data, userId) => {
    const result = await Project.create({
        ...data,
        createdBy: new mongoose.Types.ObjectId(userId),
    });
    return result;
};
const getProjects = async () => {
    const result = await Project.find({ isDeleted: false });
    return result;
};
const updateProject = async (id, data) => {
    const result = await Project.findByIdAndUpdate(id, data, { new: true });
    return result;
};
const softDeleteProject = async (id) => {
    const project = await Project.findByIdAndUpdate(id, { isDeleted: true, status: "DELETED" }, { new: true });
    return project;
};
export const ProjectService = {
    createProject,
    getProjects,
    updateProject,
    softDeleteProject,
};
