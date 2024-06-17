import express from "express";
import authController from '../controllers/auth'
import {verifyToken} from "../middleware/verify";

const router = express.Router();

router.post('/login', authController.handleLogin)
router.get('/auth', verifyToken, authController.handleToken)
router.post('/logout', authController.handleLogout)

export default router