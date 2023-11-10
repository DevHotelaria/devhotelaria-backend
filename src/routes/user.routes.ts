import { Router } from 'express';
import {
    createUserController,
    updateUserController
} from '../controllers/user.controller';
import verifyAuthAdminMiddleware from '../middleware/verifyAuthAdmin.middleware';

const userRoutes = Router();

userRoutes.post('', verifyAuthAdminMiddleware, createUserController);
userRoutes.patch('', verifyAuthAdminMiddleware, updateUserController);

export default userRoutes;