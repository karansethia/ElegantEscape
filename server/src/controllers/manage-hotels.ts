import {Request, Response} from "express";
import {v2 as cloudinary} from 'cloudinary';
import Hotel, {HotelType} from "../models/hotel";

const handleRegistration = async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;


        //upload each image
        const uploadImages = imageFiles.map(async(image) => {
            //converting image to base64 and then describing the details of image such as base and mimetype
            const b64 = Buffer.from(image.buffer).toString("base64");
            let dataUri = "data" + image.mimetype + ";base62," + b64;
            // uploading to cloudinary
            const res = await cloudinary.uploader.upload(dataUri)
            return res.url;
        })
        newHotel.imageUrls = await Promise.all(uploadImages);
        newHotel.lastUpdated = new Date()
        newHotel.userId = req.userId;

        const hotel = await Hotel.create({...newHotel});
        return res.status(200).send(hotel)

    } catch (e) {
        console.log("Error creating hotel", e);
        res.status(500).json({message: "Something went wrong"})
    }
}

export default {handleRegistration}