import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { createGuestController, listGuestController } from "../controllers/guest.controller";

const guestRoutes = Router();

guestRoutes.post('', verifyAuthMiddleware, verifyConnected, createGuestController);
guestRoutes.get('', verifyAuthMiddleware, verifyConnected, listGuestController);

export default guestRoutes;