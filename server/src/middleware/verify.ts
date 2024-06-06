import {Request, Response, NextFunction} from "express";
import jwt, {JwtPayload} from 'jsonwebtoken'

declare global {
    namespace Express {
        interface Request {
            userId: string;
        }
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies["jwt_token"];
    if(!token){
        return res.status(401).json({message: "unauthorized"})
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.userId = ( decoded as JwtPayload).userId;
        next()
    }catch (e) {
        console.log(e.message)
        return res.status(401).json({message: "unauthorized"})
    }
}