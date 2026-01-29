#!/bin/bash

# Quick Setup Script for Zerodha Clone

echo "🚀 Setting up Zerodha Clone Trading Platform..."

# Backend setup
echo ""
echo "📦 Installing backend dependencies..."
cd backend
npm install

# Create .env if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cat > .env << EOF
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zerodha-clone
JWT_SECRET=your-secret-key-here-change-in-production
NODE_ENV=development
EOF
fi

cd ..

# Frontend setup
echo ""
echo "📦 Installing frontend dependencies..."
cd frontend
npm install

# Create .env if it doesn't exist
if [ ! -f .env ]; then
  echo "Creating .env file..."
  cat > .env << EOF
REACT_APP_API_URL=http://localhost:5000
EOF
fi

cd ..

echo ""
echo "✅ Setup complete!"
echo ""
echo "To start the application:"
echo "  npm run dev"
echo ""
echo "Or run them separately:"
echo "  Backend: npm run backend"
echo "  Frontend: npm run frontend"
echo ""
echo "Make sure MongoDB is running on localhost:27017"
