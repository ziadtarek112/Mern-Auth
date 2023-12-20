import express from "express"
import { authUser, getUserProfile, logoutUser, registerUser, updateUserProfile } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const userRouter = express.Router();


userRouter.post('/', registerUser);
userRouter.post('/auth', authUser);
userRouter.post('/logout', logoutUser);

userRouter.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile)

export default userRouter