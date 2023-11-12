import { Request, Response } from "express";
import createRoomService from "../services/room/createRoom.service";

export const createRoomController = async (req: Request, res: Response) => {
    const { roomNumber } = req.body;

    const roomCreated = await createRoomService(roomNumber);

    console.log(roomCreated)

    return res.status(201).json(roomCreated);
};