import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
export type UserType = {
    _id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
}

const userSchema = new mongoose.Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    password: {
        required: true,
        type: String,
    },
    firstName:{
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
})

// middleware => called before every "save" in order to perform certain tasks
userSchema.pre("save", async function (next){
    if(this.isModified("password")){
        this.password = await bcrypt.hash(this.password, 8)
    }
    next();
})
const User = mongoose.model<UserType>("User", userSchema)

export default User;