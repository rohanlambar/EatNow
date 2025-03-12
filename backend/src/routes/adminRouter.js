import express from 'express';
import { addToMenu } from '../controllers/adminController.js';
import { upload } from '../services/upload.js';
const router = express.Router();

router.post('/',upload.single('image'),addToMenu);

export default router;