# Zerodha Clone - Trading Platform

A full-stack trading platform inspired by Zerodha (https://zerodha.com/). This project is built using the MERN stack (MongoDB, Express, React, Node.js) and demonstrates modern web development practices.

**Reference Platform:** [https://zerodha.com/](https://zerodha.com/)

## Features

### 🎯 Core Features
- **User Authentication**: Secure registration and login with JWT
- **Real-time Stock Market Data**: Browse and search stocks
- **Portfolio Management**: Track holdings and performance
- **Trading Orders**: Buy and sell stocks
- **Balance Management**: Account balance tracking
- **Profile Management**: Update user information

### 💻 Technical Stack

#### Backend
- **Runtime**: Node.js with Express.js
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcrypt for password hashing, CORS for cross-origin requests
- **Port**: 5000

#### Frontend
- **Framework**: React 18
- **Routing**: React Router v6
- **Styling**: CSS3 with responsive design
- **HTTP Client**: Axios
- **Icons**: React Icons
- **State Management**: React Hooks

## Project Structure

```
Zerodha-Clone/
├── backend/
│   ├── src/
│   │   ├── models/
│   │   │   ├── User.js
│   │   │   ├── Stock.js
│   │   │   ├── Portfolio.js
│   │   │   └── Order.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── stockRoutes.js
│   │   │   ├── portfolioRoutes.js
│   │   │   └── orderRoutes.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── stockController.js
│   │   │   ├── portfolioController.js
│   │   │   └── orderController.js
│   │   ├── middleware/
│   │   │   └── auth.js
│   │   └── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Signup.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   └── Markets.jsx
│   │   ├── styles/
│   │   │   ├── index.css
│   │   │   ├── Home.css
│   │   │   ├── Auth.css
│   │   │   ├── Dashboard.css
│   │   │   ├── Markets.css
│   │   │   ├── Navbar.css
│   │   │   └── Footer.css
│   │   ├── App.jsx
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   ├── package.json
│   └── .env
│
└── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/zerodha-clone
JWT_SECRET=your-secret-key-here
NODE_ENV=development
```

4. Start the server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```
REACT_APP_API_URL=http://localhost:5000
```

4. Start the React development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000`

### Run Both Together

From the root directory:
```bash
npm run dev
```

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (Protected)
- `PUT /api/auth/profile` - Update user profile (Protected)

### Stocks
- `GET /api/stocks` - Get all stocks
- `GET /api/stocks/:symbol` - Get stock by symbol
- `GET /api/stocks/search?query=` - Search stocks
- `GET /api/stocks/gainers` - Get top gainers
- `GET /api/stocks/losers` - Get top losers
- `POST /api/stocks/add` - Add new stock

### Portfolio
- `GET /api/portfolio` - Get user portfolio (Protected)
- `POST /api/portfolio/add` - Add holding (Protected)
- `DELETE /api/portfolio/:symbol` - Remove holding (Protected)

### Orders
- `POST /api/orders/create` - Create order (Protected)
- `GET /api/orders` - Get user orders (Protected)
- `GET /api/orders/:id` - Get order by ID (Protected)
- `PUT /api/orders/:id/cancel` - Cancel order (Protected)

## Database Models

### User
- name, email, password
- phone, dateOfBirth, address
- city, state, pincode
- panNumber, aadharNumber
- accountBalance (default: ₹100,000)

### Stock
- symbol, name
- currentPrice, openPrice, highPrice, lowPrice, closePrice
- volume, marketCap, peRatio, dividendYield
- industryType, description

### Portfolio
- userId, holdings (array)
- totalInvested, totalCurrentValue
- totalProfitLoss, totalProfitLossPercentage

### Order
- userId, symbol, stockName
- orderType (BUY/SELL)
- quantity, price, totalAmount
- status (PENDING/COMPLETED/CANCELLED)
- charges (brokerage, STT, exchangeFee)

## Usage

1. **Sign Up**: Create a new account with email and password
2. **Login**: Login with your credentials
3. **Browse Markets**: View available stocks and market data
4. **Place Orders**: Buy or sell stocks from your dashboard
5. **Track Portfolio**: Monitor your holdings and performance
6. **Update Profile**: Add personal and banking details

## Features Implemented

✅ User Registration & Login
✅ JWT Authentication
✅ Stock Market Data Display
✅ Portfolio Management
✅ Buy/Sell Orders
✅ Real-time Balance Updates
✅ Search & Filter Stocks
✅ Responsive UI Design
✅ Error Handling
✅ RESTful API

## Future Enhancements

- WebSocket for real-time price updates
- Advanced charting with TradingView
- Options & Derivatives trading
- Margin trading
- API integration with real market data
- Mobile app (React Native)
- Payment gateway integration
- Advanced analytics & reports
- Social trading features

## Security Notes

⚠️ This is an educational project. For production use:
- Change JWT_SECRET to a strong, random key
- Enable HTTPS
- Add rate limiting
- Implement proper input validation
- Add comprehensive error handling
- Set up proper logging
- Use environment-specific configurations
- Implement 2FA

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify database name and credentials

### API Not Found Errors
- Ensure backend server is running on port 5000
- Check API endpoints are correctly defined
- Verify CORS is enabled

### Frontend Can't Connect to Backend
- Check `REACT_APP_API_URL` in frontend `.env`
- Ensure backend server is running
- Verify CORS headers in backend

## Contributing

Feel free to fork this project and submit pull requests for any improvements.

## License

MIT License - feel free to use this project for educational purposes.

## Reference

This project is inspired by **Zerodha** - Visit [https://zerodha.com/](https://zerodha.com/) for the original platform.

---

**Note**: This is an educational project created for learning purposes. It is not affiliated with or endorsed by Zerodha.
