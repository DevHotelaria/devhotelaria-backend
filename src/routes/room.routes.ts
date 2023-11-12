import { Router } from "express";
import { UpdateRoomController, createRoomController, deleteRoomController, listRoomController } from "../controllers/room.controller";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyAdmin from "../middlewares/verifyAdmin.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";

const roomRoutes = Router();

roomRoutes.post('', verifyAuthMiddleware, verifyAdmin, verifyConnected, createRoomController);
roomRoutes.patch('/:id', verifyAuthMiddleware, verifyAdmin, verifyConnected, UpdateRoomController);
roomRoutes.get('', verifyAuthMiddleware, verifyConnected, listRoomController);
roomRoutes.delete('/:id', verifyAuthMiddleware, verifyAdmin, verifyConnected, deleteRoomController);

export default roomRoutes;