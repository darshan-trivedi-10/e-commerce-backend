import express from 'express';
import authRoutes from './v1/authRouter.js'
import buyerRoutes from './v1/buyerRouter.js'
import sellerRoutes from './v1/sellerRouter.js'

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/buyer', buyerRoutes);
router.use('/seller', sellerRoutes);

export default router;