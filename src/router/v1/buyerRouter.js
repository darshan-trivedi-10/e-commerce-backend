import express from 'express';
import tokenValidation from '../../middleware/tokenValidation.js';
import BuyerController from '../../controller/buyerController.js';

const router = express.Router();
const buyerController = new BuyerController();

router.get('/list-of-sellers', buyerController.listOfSellers);
router.get('/seller-catalog/:seller_id', buyerController.sellerItem);
router.post('/buyer/create-order/:seller_id', tokenValidation, buyerController.createOrder);

export default router;