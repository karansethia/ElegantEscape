import express from "express";
import multer from 'multer'
import {verifyToken} from "../middleware/verify";

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 2014 //10MB
    }
})

router.post('/manage-hotel',verifyToken,upload.array("imageFiles",6),()=>{})

export default router