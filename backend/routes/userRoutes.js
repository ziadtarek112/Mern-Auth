import express from "express" 
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";

const userRouter = express.Router();


userRouter.post('/', registerUser);
userRouter.post('/auth', authUser);
userRouter.post('/logout' , logoutUser);

userRouter.route('profile').get(getUserProfile).put(updateUserProfile)

export default userRouter