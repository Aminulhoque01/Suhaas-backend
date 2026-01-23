import { Router } from 'express';
import { auth, isAdmin } from '../../middlewares/auth.middleware.js';
import { ProjectController } from './project.controller.js';
const router = Router();
// Create a new project (any authenticated user)
router.post('/', auth, ProjectController.create);
// Get all projects (any authenticated user)
router.get('/', auth, ProjectController.getAll);
// Update a project (admin only)
router.patch('/:id', auth, isAdmin, ProjectController.update);
// Soft delete a project (admin only)
router.delete('/:id', auth, isAdmin, ProjectController.remove);
export default router;
