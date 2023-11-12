import { Router } from "express";
import verifyAuthMiddleware from "../middlewares/verifyAuth.middleware";
import verifyManager from "../middlewares/verifyManager.middleware";
import verifyConnected from "../middlewares/verifyConnected.middleware";
import { discountPaymentController, paidPaymentController } from "../controllers/payment.controller";

const paymentRoutes = Router();

paymentRoutes.patch('/discount/:id', verifyAuthMiddleware, verifyManager, verifyConnected, discountPaymentController);
paymentRoutes.patch('/paid/:id', verifyAuthMiddleware, verifyConnected, paidPaymentController);

export default paymentRoutes;