import { NextFunction, Request, Response } from "express";
import AppDataSource from "../data-source";
import { User } from "../entities/user.entity";

const verifyConnected = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userRepository = AppDataSource.getRepository(User);
    
    const user = await userRepository.findOneBy({
        id: req.user.id
    });

    if(!user.is_connected){
        return res.status(403).json({
            message: 'This user is not logged in'
        });
    }

    next();
};

export default verifyConnected;