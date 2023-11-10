import { Router } from 'express';
import {
    loginSessionService
} from '../controllers/session.controller';

const sessionRoutes = Router();

sessionRoutes.post('/login', loginSessionService);

export default sessionRoutes;