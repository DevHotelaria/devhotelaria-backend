import { Request, Response } from "express";
import createRoomService from "../services/room/createRoom.service";
import updateRoomService from "../services/room/updateRoom.service";

export const createRoomController = async (req: Request, res: Response) => {
    const { numberRoom } = req.body;

    const roomCreated = await createRoomService(numberRoom);

    console.log(roomCreated)

    return res.status(201).json(roomCreated);
};

export const UpdateRoomController = async (req: Request, res: Response) => {
    const { numberRoom, status } = req.body;
    const id = req.params.id

    const roomUpdated = await updateRoomService({numberRoom, status}, id);

    return res.status(200).json(roomUpdated);
}