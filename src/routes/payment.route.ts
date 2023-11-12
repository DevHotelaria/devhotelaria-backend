import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyManager from "../middlewares/verifyManager.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { discountPaymentController } from "../controllers/payment.controller";

const paymentRoutes = Router();

paymentRoutes.patch('/discount/:id', verifyAuthMiddleware, verifyManager, verifyConnected, discountPaymentController);

export default paymentRoutes;