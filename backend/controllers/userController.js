import asyncHandler from "express-async-handler"

// @desc  auth user / set token
// route   POST /api/users/auth
// @access  public
const authUser =asyncHandler (async(req ,res)=>{

    res.status(200).json({message : 'Auth User'})
})

// @desc   Register new User
// route   POST /api/users
// @access  public
const registerUser =asyncHandler (async(req ,res)=>{

    res.status(200).json({message : 'Register User'})
})
// @desc    logoin user
// route   POST /api/users/logoin
// @access  public
const loginUser =asyncHandler (async(req ,res)=>{

    res.status(200).json({message : 'Login User'})
})


// @desc    Logout user
// route   POST /api/users/auth
// @access  public

const logoutUser =asyncHandler (async(req ,res)=>{

    res.status(200).json({message : 'Logout User'})
})
// @desc    Get user Profile
// route   GET /api/users/profile
// @access  private

const getUserProfile =asyncHandler (async(req ,res)=>{
    res.status(200).json({message : ' User Profile'})
})
// @desc    Get user Profile
// route   GET /api/users/profile
// @access  private

const updateUserProfile =asyncHandler (async(req ,res)=>{
    res.status(200).json({message : ' User Profile'}) 
})

export {authUser , loginUser , logoutUser , getUserProfile , registerUser, updateUserProfile}