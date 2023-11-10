import { Router } from 'express';
import {
    createUserController,
    updateUserController,
    profileUserController,
    listUserController
} from '../controllers/user.controller';
import verifyAuthMiddleware from '../middleware/verifyAuth.middleware';
import verifyAdmin from '../middleware/verifyAdmin.middleware';

const userRoutes = Router();

userRoutes.post('', verifyAuthMiddleware, verifyAdmin, createUserController);
userRoutes.patch('/:id', verifyAuthMiddleware, verifyAdmin, updateUserController);
userRoutes.get('/profile', verifyAuthMiddleware, profileUserController);
userRoutes.get('', verifyAuthMiddleware, verifyAdmin, listUserController);

export default userRoutes;