import { Router } from 'express';
import {
    createUserController,
    updateUserController
} from '../controllers/user.controller';
import verifyAuthMiddleware from '../middleware/verifyAuth.middleware';
import verifyAdmin from '../middleware/verifyAdmin.middleware';

const userRoutes = Router();

userRoutes.post('', verifyAuthMiddleware, verifyAdmin, createUserController);
userRoutes.patch('/:id', verifyAuthMiddleware, verifyAdmin, updateUserController);

export default userRoutes;