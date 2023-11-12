import { Router } from 'express';
import {
    loginSessionController,
    logoutSessionController
} from '../controllers/session.controller';
import verifyAuthMiddleware from '../middlewares/verifyAuth.middleware';

const sessionRoutes = Router();

sessionRoutes.post('/login', loginSessionController);
sessionRoutes.patch('/logout', verifyAuthMiddleware, logoutSessionController);

export default sessionRoutes;