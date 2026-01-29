import mongoose from 'mongoose';

const portfolioSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  holdings: [
    {
      symbol: String,
      quantity: Number,
      averagePrice: Number,
      currentPrice: Number,
      totalInvested: Number,
      currentValue: Number,
      profitLoss: Number,
      profitLossPercentage: Number,
      addedAt: {
        type: Date,
        default: Date.now
      }
    }
  ],
  totalInvested: {
    type: Number,
    default: 0
  },
  totalCurrentValue: {
    type: Number,
    default: 0
  },
  totalProfitLoss: {
    type: Number,
    default: 0
  },
  totalProfitLossPercentage: {
    type: Number,
    default: 0
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Portfolio', portfolioSchema);
