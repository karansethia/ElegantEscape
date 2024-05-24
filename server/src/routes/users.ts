import express,{Request, Response} from "express";
import userController from '../controllers/user'
import {validateRegistration} from "../middleware/validation";

const router = express.Router();

// => /api/v1/register
router.post('/register',validateRegistration,userController.handleRegistration)

export default  router
