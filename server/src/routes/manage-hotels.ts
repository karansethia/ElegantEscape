import express from "express";
import multer from 'multer'
import {verifyToken} from "../middleware/verify";
import manageHotels from "../controllers/manage-hotels";

const router = express.Router();

const storage = multer.memoryStorage()
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 10 * 1024 * 2014 //10MB
    }
})

router.post('/manage-hotel',verifyToken,upload.array("imageFiles",6),manageHotels.handleRegistration);
router.get('/manage-hotel', verifyToken,manageHotels.handleGetHotels);
router.get('/manage-hotel/:id',verifyToken, manageHotels.handleGetHotelDetails)

export default router