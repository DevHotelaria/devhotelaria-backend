import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { checkinManagerController } from "../controllers/manager.controller";

const managerRoutes = Router();

managerRoutes.post('/checkin', verifyAuthMiddleware, verifyConnected, checkinManagerController);

export default managerRoutes;