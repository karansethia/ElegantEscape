import {Request, Response} from "express";
import {v2 as cloudinary} from 'cloudinary';
import Hotel, {HotelType} from "../models/hotel";
import {uploadImages} from "../utils";

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
const handleGetHotels = async(req:Request, res: Response) => {
    try{
    const hotels = await Hotel.find({userId: req.userId});
        console.log(hotels)
        res.json(hotels)
    }catch (e) {
        console.log("Error searching hotel")
        console.log(e.message);
        res.status(500).json({message: "Something went wrong"})
    }
}

const handleGetHotelDetails = async (req: Request, res: Response) => {
    const id = req.params.id.toString();
    try{
        const hotel = await Hotel.findOne({_id: id, userId: req.userId});
        res.status(200).json(hotel)
    }catch (e) {
        console.log("Error searching hotel")
        console.log(e.message);
        res.status(500).json({message: "Something went wrong"})
    }
}

export default {handleRegistration, handleGetHotels, handleGetHotelDetails}