import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { checkinManagerController, checkoutManagerController } from "../controllers/manager.controller";

const managerRoutes = Router();

managerRoutes.post('/checkin', verifyAuthMiddleware, verifyConnected, checkinManagerController);
managerRoutes.patch('/checkout/:id', verifyAuthMiddleware, verifyConnected, checkoutManagerController);

export default managerRoutes;