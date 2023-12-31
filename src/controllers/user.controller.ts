import { Request, Response } from 'express';
import { instanceToPlain } from 'class-transformer';
import createUserService from '../services/users/createUser.service';
import updateUserService from '../services/users/updateUser.service';
import profileUserService from '../services/users/profileUser.service';
import listUserService from '../services/users/listUser.service';
import deleteUserService from '../services/users/deleteUser.service';

export const createUserController = async (req: Request, res: Response) => {
    const { name, type_user, password} = req.body;

    const userCreated = await createUserService({
        name, type_user, password
    });

    return res.status(201).json(instanceToPlain(userCreated));
};

export const updateUserController = async (req: Request, res: Response) => {
    const { name, type_user, password } = req.body;
    const idUser = req.params.id;

    const updatedUser = await updateUserService({name, type_user, password}, idUser);

    return res.status(200).json(instanceToPlain(updatedUser));
};

export const profileUserController = async (req: Request, res: Response) => {
    const id = req.user.id;

    const user = await profileUserService(id);

    return res.status(200).json(instanceToPlain(user));
};

export const listUserController = async (req: Request, res: Response) => {
    const users = await listUserService();

    return res.status(200).json(instanceToPlain(users));
};

export const deleteUserController = async (req: Request, res: Response) => {
    const id = req.params.id;

    await deleteUserService(id);

    return res.send(204);
};