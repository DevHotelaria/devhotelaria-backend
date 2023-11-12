import { Router } from 'express';
import {
    createUserController,
    updateUserController,
    profileUserController,
    listUserController,
    deleteUserController
} from '../controllers/user.controller';
import verifyAuthMiddleware from '../middlewares/verifyAuth.middleware';
import verifyAdmin from '../middlewares/verifyAdmin.middleware';
import verifyConnected from '../middlewares/verifyConnected.middleware';

const userRoutes = Router();

userRoutes.post('', verifyAuthMiddleware, verifyAdmin, verifyConnected, createUserController);
userRoutes.patch('/:id', verifyAuthMiddleware, verifyAdmin, verifyConnected, updateUserController);
userRoutes.get('/profile', verifyAuthMiddleware, verifyConnected, profileUserController);
userRoutes.get('', verifyAuthMiddleware, verifyAdmin, verifyConnected, listUserController);
userRoutes.delete('/:id', verifyAuthMiddleware, verifyAdmin, verifyConnected, deleteUserController);

export default userRoutes;