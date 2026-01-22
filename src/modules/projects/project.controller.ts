
import { Request, Response } from 'express';
import { ProjectService } from './project.service';
import { IProject } from './project.interface';

// Create a new project
const create = async (req: Request, res: Response) => {
  try {
    const userId = req.user?.id;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const project: IProject = await ProjectService.createProject(req.body, userId);
    res.status(201).json(project);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Get all projects
const getAll = async (_req: Request, res: Response) => {
  try {
    const projects: IProject[] = await ProjectService.getProjects();
    res.json(projects);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// Update a project
const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Project ID is required' });

    const project: IProject | null = await ProjectService.updateProject(id as string, req.body);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    res.json(project);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// Soft delete a project
const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'Project ID is required' });

    const project: IProject | null = await ProjectService.softDeleteProject(id as string);
    if (!project) return res.status(404).json({ message: 'Project not found' });

    res.json({ message: 'Project deleted successfully', project });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const ProjectController = {
  create,
  getAll,
  update,
  remove,
};
