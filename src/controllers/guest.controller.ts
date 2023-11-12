import { Request, Response } from "express";
import createGuestService from "../services/guest/createGuest.service";
import listGuestService from "../services/guest/listGuest.service";
import updateGuestService from "../services/guest/updateGuest.service";

export const createGuestController = async (req: Request, res: Response) => {
    const { name, phone_number, nationality, emergency_contact, cpf } = req.body;

    const guestCreated = await createGuestService({name, phone_number, nationality, emergency_contact, cpf});

    return res.status(201).json(guestCreated);
};

export const listGuestController = async (req: Request, res: Response) => {
    const guests = await listGuestService();

    return res.status(200).json(guests);
};

export const updateGuestController = async (req: Request, res: Response) => {
    const { name, phone_number, nationality, emergency_contact, cpf } = req.body;
    const id = req.params.id;

    const guestUpdated = await updateGuestService({name, phone_number, nationality, emergency_contact, cpf}, id)

    return res.status(200).json(guestUpdated);
};