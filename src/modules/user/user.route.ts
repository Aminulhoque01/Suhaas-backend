

import { Router } from 'express';
import { UserController } from './user.controller.js';
import { auth, isAdmin } from '../../middlewares/auth.middleware.js';
 
 

const router = Router();

router.get('/', auth, isAdmin, UserController.getUsers);
router.patch('/:id/role', auth, isAdmin, UserController.changeRole);
router.patch('/:id/status', auth, isAdmin, UserController.changeStatus);

export default router;