import {Request, Response} from "express";
import User from "../models/user";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const handleLogin = async(req:Request, res:Response) => {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({email: email});
        if(!user){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({message: "Invalid credentials"});
        }
        const token = jwt.sign({userId:user._id},
            process.env.JWT_SECRET as string,
            {expiresIn: '1d'});
    res.cookie("jwt_token", token,
        {httpOnly: true,
            secure: process.env.NODE_ENV === "PRODUCTION",
            maxAge: 84600000
        })
res.status(200).json({userId: user._id})
    }catch (e) {
        console.log(e.message)
        res.status(500).json({message: "SOmething went wrong"})
    }
}

export default {handleLogin}