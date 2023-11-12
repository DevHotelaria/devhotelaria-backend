import { Request, Response } from "express";
import checkinManagerService from "../services/manager/checkinManager.service";

export const checkinManagerController = async (req: Request, res: Response) => {
    const { guest_id, room_id } = req.body;

    const managerCreated = await checkinManagerService({guest_id, room_id});

    return res.status(201).json(managerCreated);
}