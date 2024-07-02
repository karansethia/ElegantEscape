import {Request, Response} from "express";
import {v2 as cloudinary} from 'cloudinary';
import Hotel, {HotelType} from "../models/hotel";

const handleRegistration = async (req: Request, res: Response) => {
    try {
        const imageFiles = req.files as Express.Multer.File[];
        const newHotel: HotelType = req.body;
        console.log("inside hotel register")
        console.log(newHotel)
        //upload each image
        const imageUrls = await uploadImages(imageFiles);
        newHotel.imageUrls = imageUrls;
        newHotel.lastUpdated = new Date()
        newHotel.userId = req.userId;
        // console.log(newHotel)

        const hotel = await Hotel.create({...newHotel});

        return res.status(200).send(hotel)

    } catch (e) {
        console.log("Error creating hotel", e.message);
        res.status(500).json({message: "Something went wrong"})
    }
}
async function uploadImages(imageFiles: Express.Multer.File[]) {
    const uploadPromises = imageFiles.map(async (image) => {
        const b64 = Buffer.from(image.buffer).toString("base64");
        let dataURI = "data:" + image.mimetype + ";base64," + b64;
        const res = await cloudinary.uploader.upload(dataURI);
        return res.url;
    });

    const imageUrls = await Promise.all(uploadPromises);
    return imageUrls;
}
export default {handleRegistration}