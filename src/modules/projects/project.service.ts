import mongoose from "mongoose";
import { IProject } from "./project.interface.js";
import { Project } from "./project.model.js";

const createProject = async (data: Partial<IProject>, userId: string) => {
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

const updateProject = async (id: string, data: Partial<IProject>) => {
  const result = await Project.findByIdAndUpdate(id, data, { new: true });
  return result;
};

const softDeleteProject = async (id: string) => {
  const project = await Project.findByIdAndUpdate(
    id,
    { isDeleted: true, status: "DELETED" },
    { new: true },
  );
  return project;
}

export const ProjectService = {
  createProject,
  getProjects,
  updateProject,
  softDeleteProject,
};
