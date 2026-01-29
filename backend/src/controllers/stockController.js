import Stock from '../models/Stock.js';

export const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stock.find().sort({ symbol: 1 });
    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getStockBySymbol = async (req, res) => {
  try {
    const { symbol } = req.params;
    const stock = await Stock.findOne({ symbol: symbol.toUpperCase() });

    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }

    res.json(stock);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const searchStocks = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Search query required' });
    }

    const stocks = await Stock.find({
      $or: [
        { symbol: { $regex: query, $options: 'i' } },
        { name: { $regex: query, $options: 'i' } }
      ]
    }).limit(10);

    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getTopGainers = async (req, res) => {
  try {
    const stocks = await Stock.find()
      .sort({ profitLossPercentage: -1 })
      .limit(10);

    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getTopLosers = async (req, res) => {
  try {
    const stocks = await Stock.find()
      .sort({ profitLossPercentage: 1 })
      .limit(10);

    res.json(stocks);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const addStock = async (req, res) => {
  try {
    const { symbol, name, currentPrice, openPrice, highPrice, lowPrice, closePrice, volume, industryType } = req.body;

    const existingStock = await Stock.findOne({ symbol: symbol.toUpperCase() });
    if (existingStock) {
      return res.status(400).json({ message: 'Stock already exists' });
    }

    const stock = new Stock({
      symbol: symbol.toUpperCase(),
      name,
      currentPrice,
      openPrice,
      highPrice,
      lowPrice,
      closePrice,
      volume,
      industryType
    });

    await stock.save();
    res.status(201).json({ message: 'Stock added successfully', stock });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
