import express from "express";
import multer from 'multer'

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 2014 //10MB
    }
})

router.post('/',()=>{})

export default router