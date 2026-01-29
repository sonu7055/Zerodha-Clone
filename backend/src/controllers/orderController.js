import Order from '../models/Order.js';
import User from '../models/User.js';

export const createOrder = async (req, res) => {
  try {
    const { symbol, stockName, orderType, quantity, price } = req.body;
    const totalAmount = quantity * price;

    // Check user balance for BUY orders
    if (orderType === 'BUY') {
      const user = await User.findById(req.user.id);
      if (user.accountBalance < totalAmount) {
        return res.status(400).json({ message: 'Insufficient balance' });
      }
    }

    const order = new Order({
      userId: req.user.id,
      symbol,
      stockName,
      orderType,
      quantity,
      price,
      totalAmount,
      status: 'COMPLETED',
      executionTime: Date.now()
    });

    await order.save();

    // Update user balance
    const user = await User.findById(req.user.id);
    if (orderType === 'BUY') {
      user.accountBalance -= totalAmount;
    } else {
      user.accountBalance += totalAmount;
    }
    await user.save();

    res.status(201).json({ message: 'Order placed successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).sort({ orderTime: -1 });
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order || order.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const cancelOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order || order.userId.toString() !== req.user.id) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (order.status !== 'PENDING') {
      return res.status(400).json({ message: 'Can only cancel pending orders' });
    }

    order.status = 'CANCELLED';
    await order.save();

    res.json({ message: 'Order cancelled successfully', order });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
