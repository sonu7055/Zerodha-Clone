import express from 'express';
import { getAllStocks, getStockBySymbol, searchStocks, getTopGainers, getTopLosers, addStock } from '../controllers/stockController.js';

const router = express.Router();

router.get('/', getAllStocks);
router.get('/search', searchStocks);
router.get('/gainers', getTopGainers);
router.get('/losers', getTopLosers);
router.get('/:symbol', getStockBySymbol);
router.post('/add', addStock);

export default router;
