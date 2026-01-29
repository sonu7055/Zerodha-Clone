import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  symbol: {
    type: String,
    required: true
  },
  stockName: {
    type: String,
    required: true
  },
  orderType: {
    type: String,
    enum: ['BUY', 'SELL'],
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['PENDING', 'COMPLETED', 'CANCELLED'],
    default: 'PENDING'
  },
  orderTime: {
    type: Date,
    default: Date.now
  },
  executionTime: {
    type: Date,
    default: null
  },
  charges: {
    brokerage: { type: Number, default: 0 },
    stt: { type: Number, default: 0 },
    exchangeFee: { type: Number, default: 0 }
  }
});

export default mongoose.model('Order', orderSchema);
