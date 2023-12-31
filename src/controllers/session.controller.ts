import { Request, Response } from 'express';
import loginSessionService from '../services/sessions/loginSession.service';
import logoutSessionService from '../services/sessions/logoutSession.service';

export const loginSessionController = async (req: Request, res: Response) => {
    const { name, password } = req.body;

    const token = await loginSessionService({name, password});

    return res.status(200).json({ token });
};

export const logoutSessionController = async (req: Request, res: Response) => {
    const id = req.user.id;

    await logoutSessionService(id);

    return res.send(204);
}