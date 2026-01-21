

import { Router } from 'express';
import { UserController } from './user.controller';
import { auth, isAdmin } from '../middlewares/auth.middleware';
 
 

const router = Router();

router.get('/', auth, isAdmin, UserController.getUsers);
router.patch('/:id/role', auth, isAdmin, UserController.changeRole);
router.patch('/:id/status', auth, isAdmin, UserController.changeStatus);

export default router;