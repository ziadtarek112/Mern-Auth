import asyncHandler from "express-async-handler"
import User from "../models/userModel.js"
import generateToken from "../utils/generateToken.js"

// @desc  auth user / set token
// route   POST /api/users/auth
// @access  public
const authUser = asyncHandler(async (req, res) => {
    res.status(200).json({ message: 'Auth User' })
})

// @desc   Register new User
// route   POST /api/users
// @access  public
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    const userExist =await User.findOne({ email });
    if (userExist) {
        res.status(400);
        throw new Error("User already exists");
    }

    const user =await User.create({ name, email, password });

    if (user) {
        generateToken(res , user.id)
        res.status(201).json({ _id: user.id, name: user.name, email: user.email });
    }
    else {
        res.status(400);
        throw new Error('Invalid User data');
    }
})
// @desc    logoin user
// route   POST /api/users/logoin
// @access  public
const loginUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Login User' })
})


// @desc    Logout user
// route   POST /api/users/auth
// @access  public

const logoutUser = asyncHandler(async (req, res) => {

    res.status(200).json({ message: 'Logout User' })
})
// @desc    Get user Profile
// route   GET /api/users/profile
// @access  private

const getUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ' User Profile' })
})
// @desc    Get user Profile
// route   GET /api/users/profile
// @access  private

const updateUserProfile = asyncHandler(async (req, res) => {
    res.status(200).json({ message: ' User Profile' })
})

export { authUser, loginUser, logoutUser, getUserProfile, registerUser, updateUserProfile }