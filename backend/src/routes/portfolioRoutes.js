import express from 'express';
import { getPortfolio, addHolding, removeHolding } from '../controllers/portfolioController.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.get('/', verifyToken, getPortfolio);
router.post('/add', verifyToken, addHolding);
router.delete('/:symbol', verifyToken, removeHolding);

export default router;
