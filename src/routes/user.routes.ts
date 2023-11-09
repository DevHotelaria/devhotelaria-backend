import { Router } from 'express';
import {
    createUserController,
} from '../controllers/user.controller';
import verifyAuthAdminMiddleware from '../middleware/verifyAuthAdmin.middleware';

const userRoutes = Router();

userRoutes.post('', verifyAuthAdminMiddleware, createUserController);

export default userRoutes;