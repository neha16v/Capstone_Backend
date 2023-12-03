import express from 'express'
import { registerUser,loginUser,resetPassword,resetPasswordpage} from '../Controllers/user.controller.js'


const router=express.Router()

router.post("/register",registerUser)
router.post("/login",loginUser)
router.post('/resetpassword', resetPassword);   
router.post('/resetpasswordpage',resetPasswordpage);

export default router