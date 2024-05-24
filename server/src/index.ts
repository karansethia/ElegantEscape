// @ts-ignore
import express,{Request, Response} from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./db/connect";
import userRoutes from './routes/users';
import authRoutes from './routes/auth';


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())


app.use('/api/v1',userRoutes)
app.use('/api/v1',authRoutes)
app.get('/api/health', async(req: Request, res: Response) => {
res.json({message: "App working"})
})

app.listen(3000,async () => {
    await connectDB(process.env.MONGO_URI as string);
    console.log("database connected")
})