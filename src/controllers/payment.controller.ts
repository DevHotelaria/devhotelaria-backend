import { Request, Response } from "express";
import discountPaymentService from "../services/payment/discountPayment.service";

export const discountPaymentController = async (req: Request, res: Response) => {
    const { privileges, discount } = req.body;
    const id = req.params.id;

    const managerUpdated = await discountPaymentService({privileges, discount}, id);

    return res.status(200).json(managerUpdated);
}