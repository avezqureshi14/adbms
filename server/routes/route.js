import express from "express"
import { loginUser } from "../controllers/login-controller.js";
import { SignUpUser } from "../controllers/login-controller.js";
const router = express.Router();
router.post('/login',loginUser)
router.post('/register',SignUpUser)

export default router;