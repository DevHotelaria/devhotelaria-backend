import { NextFunction, Request, Response } from 'express';

const verifyAdmin = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(req.user.type_user != 'administrador'){
        return res.status(401).json({
            message: 'User does not have access level to access this route'
        });
    }

    next();
};

export default verifyAdmin;