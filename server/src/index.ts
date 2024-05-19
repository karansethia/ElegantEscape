// @ts-ignore
import express,{Request, Response} from 'express';
import cors from 'cors'
import 'dotenv/config'
import connectDB from "./db/connect";


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(cors())

app.get('/api/health', async(req: Request, res: Response) => {
res.json({message: "App working"})
})

app.listen(3000,async () => {
    await connectDB(process.env.MONGO_URI as string);
    console.log("mongodb connected")
})