# Getting Started Guide

## Quick Start

### Option 1: Automated Setup (Windows)
```bash
cd Zerodha-Clone
setup.bat
npm run dev
```

### Option 2: Automated Setup (Linux/Mac)
```bash
cd Zerodha-Clone
chmod +x setup.sh
./setup.sh
npm run dev
```

### Option 3: Manual Setup

#### Prerequisites
1. Install Node.js from https://nodejs.org
2. Install MongoDB from https://www.mongodb.com/try/download/community
3. Start MongoDB service

#### Backend
```bash
cd backend
npm install
npm start
```

#### Frontend (in another terminal)
```bash
cd frontend
npm install
npm start
```

The frontend will open automatically at http://localhost:3000

## Default Login

After registration, you'll get:
- **Initial Account Balance**: ₹100,000
- **Authentication**: JWT token valid for 7 days

## Common Commands

### Development
- `npm run dev` - Start both backend and frontend
- `npm run backend` - Start only backend
- `npm run frontend` - Start only frontend

### Production
- `npm run build` - Build frontend for production

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zerodha-clone
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
```

## Database Reset

To reset the database:
```bash
mongo
use zerodha-clone
db.dropDatabase()
exit
```

## Troubleshooting

### Port Already in Use
```bash
# For port 5000 (backend)
netstat -ano | findstr :5000

# For port 3000 (frontend)
netstat -ano | findstr :3000
```

### MongoDB Connection Failed
- Check MongoDB is running: `mongod`
- Verify connection string in backend/.env
- Try connecting: `mongo`

### Dependencies Issues
```bash
# Clear npm cache
npm cache clean --force

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

## Project Layers

### Frontend (React)
- Pages: Home, Login, Signup, Dashboard, Markets
- Components: Navbar, Footer
- Styles: CSS modules for each page

### Backend (Node.js/Express)
- Models: User, Stock, Portfolio, Order
- Controllers: Authentication, Stocks, Portfolio, Orders
- Routes: RESTful API endpoints
- Middleware: JWT Authentication

### Database (MongoDB)
- Collections: users, stocks, portfolios, orders
- Relationships: Users have portfolios and orders

## Next Steps

1. **Add Sample Data**: Execute the sample stocks SQL
2. **Test APIs**: Use Postman to test API endpoints
3. **Customize**: Modify colors, fonts, features
4. **Deploy**: Use Heroku, AWS, or your preferred platform
