import express from 'express';
import { createOrder, getOrders, getOrderById, cancelOrder } from '../controllers/orderController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/create', verifyToken, createOrder);
router.get('/', verifyToken, getOrders);
router.get('/:id', verifyToken, getOrderById);
router.put('/:id/cancel', verifyToken, cancelOrder);

export default router;
