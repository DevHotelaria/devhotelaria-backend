import { Request, Response } from "express";
import createGuestService from "../services/guest/createGuest.service";

export const createGuestController = async (req: Request, res: Response) => {
    const { name, phone_number, nationality, emergency_contact, cpf } = req.body;

    const guestCreated = await createGuestService({name, phone_number, nationality, emergency_contact, cpf});

    return res.status(201).json(guestCreated);
};