import express from 'express' 
import {checkAuthentication} from '../middlewares/checkAuth.js';
import { handleGetCartItem , handleUpdateToCart , handleDeleteToCart , handleAddToCart } from '../controllers/cartControllers.js'
const router = express.Router();


router.get("/",checkAuthentication,handleGetCartItem);
router.post("/",checkAuthentication,handleAddToCart);
router.put("/",checkAuthentication,handleUpdateToCart);
router.delete("/",checkAuthentication,handleDeleteToCart);

export default router ;