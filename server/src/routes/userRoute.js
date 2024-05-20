import {Router} from 'express'
import { logoutUser, loginUser, registerUser, refreshAccessToken } from '../controller/userController.js';
import { verifyJWT } from "../middlewares/authMiddleware.js";

const router = Router();

router.route("/signUp").post( registerUser )
router.route("/login").post(loginUser)

router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-token").post(refreshAccessToken)

export default router
