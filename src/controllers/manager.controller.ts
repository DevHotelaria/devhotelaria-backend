import { Request, Response } from "express";
import checkinManagerService from "../services/manager/checkinManager.service";
import checkoutManagerService from "../services/manager/checkoutManager.service";

export const checkinManagerController = async (req: Request, res: Response) => {
    const { guest_id, room_id } = req.body;

    const managerCreated = await checkinManagerService({guest_id, room_id});

    return res.status(201).json(managerCreated);
}

export const checkoutManagerController = async (req: Request, res: Response) => {
    const id = req.params.id;

    const managerUpdated = await checkoutManagerService(id);

    return res.status(200).json(managerUpdated);
}