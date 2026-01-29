import mongoose from 'mongoose';

const stockSchema = new mongoose.Schema({
  symbol: {
    type: String,
    required: true,
    unique: true,
    uppercase: true
  },
  name: {
    type: String,
    required: true
  },
  currentPrice: {
    type: Number,
    required: true
  },
  openPrice: {
    type: Number,
    required: true
  },
  highPrice: {
    type: Number,
    required: true
  },
  lowPrice: {
    type: Number,
    required: true
  },
  closePrice: {
    type: Number,
    required: true
  },
  volume: {
    type: Number,
    default: 0
  },
  marketCap: {
    type: String,
    default: ''
  },
  peRatio: {
    type: Number,
    default: 0
  },
  dividendYield: {
    type: Number,
    default: 0
  },
  industryType: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  lastUpdate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Stock', stockSchema);
