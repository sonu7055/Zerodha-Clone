import Portfolio from '../models/Portfolio.js';
import User from '../models/User.js';

export const getPortfolio = async (req, res) => {
  try {
    let portfolio = await Portfolio.findOne({ userId: req.user.id });

    if (!portfolio) {
      portfolio = new Portfolio({ userId: req.user.id });
      await portfolio.save();
    }

    res.json(portfolio);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const addHolding = async (req, res) => {
  try {
    const { symbol, quantity, averagePrice, currentPrice } = req.body;

    let portfolio = await Portfolio.findOne({ userId: req.user.id });

    if (!portfolio) {
      portfolio = new Portfolio({ userId: req.user.id });
    }

    const totalInvested = quantity * averagePrice;
    const currentValue = quantity * currentPrice;
    const profitLoss = currentValue - totalInvested;
    const profitLossPercentage = (profitLoss / totalInvested) * 100;

    const existingHolding = portfolio.holdings.find(h => h.symbol === symbol);

    if (existingHolding) {
      existingHolding.quantity += quantity;
      existingHolding.averagePrice = (existingHolding.totalInvested + totalInvested) / existingHolding.quantity;
      existingHolding.totalInvested = existingHolding.quantity * existingHolding.averagePrice;
      existingHolding.currentValue = existingHolding.quantity * currentPrice;
      existingHolding.profitLoss = existingHolding.currentValue - existingHolding.totalInvested;
      existingHolding.profitLossPercentage = (existingHolding.profitLoss / existingHolding.totalInvested) * 100;
    } else {
      portfolio.holdings.push({
        symbol,
        quantity,
        averagePrice,
        currentPrice,
        totalInvested,
        currentValue,
        profitLoss,
        profitLossPercentage
      });
    }

    await portfolio.save();
    res.json({ message: 'Holding added successfully', portfolio });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const removeHolding = async (req, res) => {
  try {
    const { symbol } = req.params;

    const portfolio = await Portfolio.findOne({ userId: req.user.id });
    if (!portfolio) {
      return res.status(404).json({ message: 'Portfolio not found' });
    }

    portfolio.holdings = portfolio.holdings.filter(h => h.symbol !== symbol);
    await portfolio.save();

    res.json({ message: 'Holding removed successfully', portfolio });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
