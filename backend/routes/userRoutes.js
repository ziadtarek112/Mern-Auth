import express from "express"
import { authUser } from "../controllers/userController.js";

const userRouter = express.Router();


userRouter.post('/auth', authUser)

export default userRouter