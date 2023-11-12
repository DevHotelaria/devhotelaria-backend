import { Router } from "express";
import { createRoomController } from "../controllers/room.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyAdmin from "../middlewares/verifyAdmin.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";

const roomRoutes = Router();

roomRoutes.post('', verifyAuthMiddleware, verifyAdmin, verifyConnected, createRoomController);

export default roomRoutes;