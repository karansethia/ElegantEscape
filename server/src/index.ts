// @ts-ignore
import express,{Request, Response} from 'express';
import cors from 'cors'
import 'dotenv/config'
import cookieParser from 'cookie-parser'
import connectDB from "./db/connect";
import userRoutes from './routes/users';
import authRoutes from './routes/auth';
import path from "path";
import {v2 as cloudinary} from 'cloudinary'

cloudinary.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME
})

const app = express();

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors({
    origin: process.env.FRONTEND_URL as string,
    credentials: true
}))

app.use(express.static(path.join(__dirname, "../../client/dist/")))

app.use('/api/v1',userRoutes)
app.use('/api/v1',authRoutes)
app.get('/api/health', async(req: Request, res: Response) => {
res.json({message: "App working"})
})

app.listen(3001,async () => {

    await connectDB(process.env.MONGO_URI as string);
    console.log("database connected")
})