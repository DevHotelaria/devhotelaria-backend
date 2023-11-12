import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

const verifyAuthMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    let token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({
            message: 'Invalid token'
        });
    }

    token = token.split(' ')[1];

    jwt.verify(token, process.env.SECRET_KEY as string, (err, decoded: any) => {
        if(err) {
            return res.status(401).json({
                message: 'Invalid token'
            });
        }

        req.user = {
            id: decoded.id,
            type_user: decoded.type_user
        };
    });

    next();
};

export default verifyAuthMiddleware;