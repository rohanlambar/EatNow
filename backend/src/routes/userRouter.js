import express from 'express'
import {handleUserLogin, handleUserSignUp} from '../controllers/userControllers.js'
const router = express.Router()

router.post('/login',handleUserLogin);
router.post('/signup',handleUserSignUp);

export default router;