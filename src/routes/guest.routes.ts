import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { createGuestController, deleteGuestController, listGuestController, updateGuestController } from "../controllers/guest.controller";
import verifyAdmin from "../middlewares/verifyAdmin.middleware";

const guestRoutes = Router();

guestRoutes.post('', verifyAuthMiddleware, verifyConnected, createGuestController);
guestRoutes.get('', verifyAuthMiddleware, verifyConnected, listGuestController);
guestRoutes.patch('/:id', verifyAuthMiddleware, verifyConnected, updateGuestController);
guestRoutes.delete('/:id', verifyAuthMiddleware, verifyAdmin, verifyConnected, deleteGuestController);

export default guestRoutes;