"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const project_model_1 = require("./project.model");
const createProject = async (data, userId) => {
    const result = await project_model_1.Project.create({
        ...data,
        createdBy: new mongoose_1.default.Types.ObjectId(userId),
    });
    return result;
};
const getProjects = async () => {
    const result = await project_model_1.Project.find({ isDeleted: false });
    return result;
};
const updateProject = async (id, data) => {
    const result = await project_model_1.Project.findByIdAndUpdate(id, data, { new: true });
    return result;
};
const softDeleteProject = async (id) => {
    const project = await project_model_1.Project.findByIdAndUpdate(id, { isDeleted: true, status: "DELETED" }, { new: true });
    return project;
};
exports.ProjectService = {
    createProject,
    getProjects,
    updateProject,
    softDeleteProject,
};
//# sourceMappingURL=project.service.js.map