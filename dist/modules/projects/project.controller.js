"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectController = void 0;
const project_service_1 = require("./project.service");
// Create a new project
const create = async (req, res) => {
    try {
        const userId = req.user?.id;
        if (!userId)
            return res.status(401).json({ message: 'Unauthorized' });
        const project = await project_service_1.ProjectService.createProject(req.body, userId);
        res.status(201).json(project);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Get all projects
const getAll = async (_req, res) => {
    try {
        const projects = await project_service_1.ProjectService.getProjects();
        res.json(projects);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// Update a project
const update = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).json({ message: 'Project ID is required' });
        const project = await project_service_1.ProjectService.updateProject(id, req.body);
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
// Soft delete a project
const remove = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id)
            return res.status(400).json({ message: 'Project ID is required' });
        const project = await project_service_1.ProjectService.softDeleteProject(id);
        if (!project)
            return res.status(404).json({ message: 'Project not found' });
        res.json({ message: 'Project deleted successfully', project });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.ProjectController = {
    create,
    getAll,
    update,
    remove,
};
//# sourceMappingURL=project.controller.js.map