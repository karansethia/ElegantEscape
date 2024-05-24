import express,{Request, Response} from "express";
import jwt from 'jsonwebtoken'
import User from "../models/user";

const router = express.Router();

// => /api/v1/register
router.post('/register',async(req: Request, res:Response)=>{
    try{
        let user = await User.findOne({email: req.body.email});
        if(user){
            return res.status(400).json({message: "User already exists"})
        }
        user = new User(req.body);
        await user.save();
        const token = jwt.sign({userId: user._id},
            process.env.JWT_SECRET as string,
            { expiresIn: '1d'}
            )
        res.cookie("jwt_token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "PRODUCTION",
            maxAge: 84600000 // => 1day
        })
        res.status(200).json({message: "User created successfully"})
    }catch (e) {
        console.log(e.message)
        res.status(500).json({message: "Something went wrong"})
    }
})

export default  router
