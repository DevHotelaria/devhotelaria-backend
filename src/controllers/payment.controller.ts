import { Request, Response } from "express";
import discountPaymentService from "../services/payment/discountPayment.service";
import paidPaymentService from "../services/payment/paidPayment.service";

export const discountPaymentController = async (req: Request, res: Response) => {
    const { privileges, discount } = req.body;
    const id = req.params.id;

    const managerUpdated = await discountPaymentService({privileges, discount}, id);

    return res.status(200).json(managerUpdated);
}

export const paidPaymentController = async (req: Request, res: Response) => {
    const { value } = req.body;
    const id = req.params.id;

    const managerUpdated = await paidPaymentService(value, id);

    return res.status(200).json(managerUpdated);
}