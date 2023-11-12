import { Request, Response } from "express";
import createRoomService from "../services/room/createRoom.service";
import updateRoomService from "../services/room/updateRoom.service";
import listRoomService from "../services/room/listRoom.service";
import deleteRoomService from "../services/room/deleteRoom.service";

export const createRoomController = async (req: Request, res: Response) => {
    const { numberRoom, description } = req.body;

    const roomCreated = await createRoomService({numberRoom, description});

    console.log(roomCreated)

    return res.status(201).json(roomCreated);
};

export const UpdateRoomController = async (req: Request, res: Response) => {
    const { numberRoom, status, description } = req.body;
    const id = req.params.id

    const roomUpdated = await updateRoomService({numberRoom, status, description}, id);

    return res.status(200).json(roomUpdated);
}

export const listRoomController = async (req: Request, res: Response) => {
    const rooms = await listRoomService();

    return res.status(200).json(rooms);
}

export const deleteRoomController = async (req: Request, res: Response) => {
    const id = req.params.id;

    await deleteRoomService(id);

    return res.send(204);
}