import express from 'express';
import SellerController from '../../controller/sellerController.js';

const router = express.Router();
const sellerController = new SellerController();


router.post('/create-catalog',sellerController.createCatalog);
router.post('/orders', sellerController.orders);

export default router;