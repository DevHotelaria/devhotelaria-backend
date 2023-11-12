import { NextFunction, Request, Response } from "express";

const verifyManager = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if(req.user.type_user != 'administrador' && req.user.type_user != 'gerente'){
        return res.status(401).json({
            message: 'User does not have access level to access this route'
        });   
    }
    
    next();
}

export default verifyManager;