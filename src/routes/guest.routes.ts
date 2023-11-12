import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { createGuestController } from "../controllers/guest.controller";

const guestRoutes = Router();

guestRoutes.post('', verifyAuthMiddleware, verifyConnected, createGuestController);

export default guestRoutes;