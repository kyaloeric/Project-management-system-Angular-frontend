 import { Router } from "express";
import { checkUserDetails,getUserProfile, getAllUsers, loginUser, registerUser } from "../controllers/userController";

import { verifyToken } from "../middleware/verifyToken";

const user_router = Router()

user_router.post('/register', registerUser)
user_router.post('/login', loginUser)
user_router.get('/all',verifyToken, getAllUsers)
user_router.get('/my_profile/:id',verifyToken, getUserProfile)

user_router.get('/check_user_details',verifyToken, checkUserDetails)

export default user_router;