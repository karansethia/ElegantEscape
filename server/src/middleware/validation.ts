import {body, validationResult} from "express-validator";
import {type Request, Response, NextFunction} from "express";

const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    console.log("validation errors here")
    console.log(errors);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()})
    }
    next();
}

export const validateRegistration = [
    body("firstName").isString().notEmpty().withMessage("Name must be a string"),
    body("lastName").isString().notEmpty().withMessage("Name must be a string"),
    body("email").isString().notEmpty().withMessage("Email must be a string"),
    body("password").isString().notEmpty().isLength({min: 6}).withMessage("Password is required with 6 letters"),
    handleValidationErrors
]
export const validateLogin = [
    body("email").isString().notEmpty().withMessage("Email must be a string"),
    body("password").isString().notEmpty().isLength({min: 6}).withMessage("Password is required with 6 letters"),
    handleValidationErrors
]

export const validateHotelRegistration = [
    body("name").notEmpty().withMessage("Name is required"),
    body("city").notEmpty().withMessage("City is required"),
    body("country").notEmpty().withMessage("Country is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type").notEmpty().withMessage("Hotel Type is required"),
    body("pricePerNight").notEmpty().isNumeric().withMessage("Price per night is required and must be a number"),
    body("facilities").notEmpty().isArray().withMessage("Facilities are required"),
    handleValidationErrors

]