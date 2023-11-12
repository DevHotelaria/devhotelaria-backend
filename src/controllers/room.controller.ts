import { Request, Response } from "express";
import createRoomService from "../services/room/createRoom.service";

export const createRoomController = async (req: Request, res: Response) => {
    const { roomNumber } = req.body;

    const roomCreated = createRoomService(roomNumber);

    return res.status(201).json(roomCreated);
};