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

const userRoutes = Router();

userRoutes.post('', verifyAdmin, verifyAuthMiddleware, createUserController);
userRoutes.patch('/:id', verifyAdmin, verifyAuthMiddleware,updateUserController);
userRoutes.get('/profile', verifyAuthMiddleware, profileUserController);
userRoutes.get('', verifyAdmin, verifyAuthMiddleware, listUserController);
userRoutes.delete('/:id', verifyAdmin, verifyAuthMiddleware, deleteUserController);

export default userRoutes;