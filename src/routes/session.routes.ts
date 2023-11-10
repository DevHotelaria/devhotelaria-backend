import { Router } from 'express';
import {
    loginSessionService,
    logoutSessionController
} from '../controllers/session.controller';
import verifyAuthMiddleware from '../middleware/verifyAuth.middleware';

const sessionRoutes = Router();

sessionRoutes.post('/login', loginSessionService);
sessionRoutes.patch('/logout', verifyAuthMiddleware, logoutSessionController);

export default sessionRoutes;