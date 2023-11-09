import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';

export const createUserController = async (req: Request, res: Response) => {
    const { name, type_user, password} = req.body;

    const userCreated = await createUserService({
        name, type_user, password
    });

    return res.status(201).json(instanceToPlain(userCreated));
}