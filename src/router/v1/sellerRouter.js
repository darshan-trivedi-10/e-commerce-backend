import express from 'express';
import SellerController from '../../controller/sellerController.js';
import tokenValidation from '../../middleware/tokenValidation.js';

const router = express.Router();
const sellerController = new SellerController();


router.post('/create-catalog', tokenValidation, sellerController.createCatalog);
router.get('/orders', tokenValidation, sellerController.orders);

export default router;