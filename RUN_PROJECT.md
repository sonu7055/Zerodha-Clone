# 🚀 How to Run the Zerodha Clone Project

## ✅ What's Ready

All dependencies have been installed:
- ✅ Root dependencies installed
- ✅ Backend dependencies installed (`/backend/node_modules`)
- ✅ Frontend dependencies installed (`/frontend/node_modules`)
- ✅ MongoDB local database ready

## 🎯 Prerequisites

Before running, make sure you have:
1. **MongoDB running** - Start MongoDB server locally
2. **Node.js installed** - Already verified
3. **Two terminal windows** - One for backend, one for frontend

## 🚀 Steps to Run

### Step 1: Start MongoDB (First)

Open a terminal and run:
```bash
mongod
```

This starts MongoDB on `localhost:27017`

### Step 2: Start Backend (Second Terminal)

```bash
cd c:\Zclone\Zerodha-Clone\backend
npm start
```

Expected output:
```
Server running on port 5000
MongoDB connected
```

**Backend runs on:** `http://localhost:5000`

### Step 3: Start Frontend (Third Terminal)

```bash
cd c:\Zclone\Zerodha-Clone\frontend
npm start
```

Expected output:
```
Compiled successfully!
On Your Network: http://192.x.x.x:3000
```

**Frontend runs on:** `http://localhost:3000`

### Step 4: Access the Application

Open your browser and go to:
```
http://localhost:3000
```

You'll see the Zerodha Clone landing page!

---

## 📋 One-Line Commands (Copy & Paste)

### Windows - Terminal 1 (Start Backend)
```powershell
cd c:\Zclone\Zerodha-Clone\backend; npm start
```

### Windows - Terminal 2 (Start Frontend)
```powershell
cd c:\Zclone\Zerodha-Clone\frontend; npm start
```

---

## 🧪 Test the Application

### Create an Account
1. Go to http://localhost:3000
2. Click "Sign Up"
3. Fill in the form:
   - Name: Test User
   - Email: test@example.com
   - Password: test123
4. Click Sign Up

### Explore Features
- **Dashboard**: View your portfolio
- **Markets**: Browse available stocks
- **Orders**: Make test trades
- **Profile**: Update your information

---

## 🐛 Troubleshooting

### MongoDB Connection Error
**Error:** "MongoDB connection error"
**Solution:** 
```bash
# Make sure MongoDB is running
mongod
```

### Port Already in Use
**Error:** "Port 5000 already in use"
**Solution:**
```bash
# Find and kill the process using port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F
```

### Cannot Find Module Error
**Error:** "Cannot find module 'xyz'"
**Solution:**
```bash
# Reinstall dependencies
cd frontend
npm install --legacy-peer-deps
```

### API Connection Issues
**Error:** "Failed to fetch from http://localhost:5000"
**Solution:**
1. Make sure backend is running on port 5000
2. Check `frontend/.env` has `REACT_APP_API_URL=http://localhost:5000`

---

## 📱 API Endpoints (20+)

### Authentication
- `POST /api/auth/register` - Sign up
- `POST /api/auth/login` - Sign in
- `GET /api/auth/profile` - Get user profile
- `PUT /api/auth/profile` - Update profile

### Stocks
- `GET /api/stocks` - Get all stocks
- `GET /api/stocks/search?query=TCS` - Search stocks
- `GET /api/stocks/:symbol` - Get specific stock
- `GET /api/stocks/gainers` - Top gainers
- `GET /api/stocks/losers` - Top losers

### Portfolio
- `GET /api/portfolio` - Get your portfolio
- `POST /api/portfolio/add` - Add holding
- `DELETE /api/portfolio/:symbol` - Sell stock

### Orders
- `POST /api/orders/create` - Place order
- `GET /api/orders` - Get all orders
- `GET /api/orders/:id` - Get order details
- `PUT /api/orders/:id/cancel` - Cancel order

---

## 🔑 Default Test Credentials

After creating an account:
- **Starting Balance**: ₹100,000
- **Token Valid For**: 7 days
- **Database**: MongoDB (zerodha-clone collection)

---

## 📊 Project Architecture

```
Frontend (React)
    ↓ (Axios)
Backend (Express.js)
    ↓
MongoDB (Database)
```

### Ports
- Frontend: **3000**
- Backend: **5000**
- MongoDB: **27017**

---

## ✨ Pages Available

1. **Home** (`/`) - Landing page
2. **Signup** (`/signup`) - Create account
3. **Login** (`/login`) - Sign in
4. **Dashboard** (`/dashboard`) - Your portfolio
5. **Markets** (`/markets`) - Browse stocks

---

## 📚 Documentation

For more information, see:
- [README.md](README.md) - Full project documentation
- [API_DOCUMENTATION.md](API_DOCUMENTATION.md) - All API endpoints
- [DEVELOPMENT.md](DEVELOPMENT.md) - Developer setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Production deployment

---

## 🎯 Quick Checklist

Before running, verify:
- [ ] MongoDB is installed and running
- [ ] Node.js is installed
- [ ] Terminal 1: Backend directory ready
- [ ] Terminal 2: Frontend directory ready
- [ ] Terminal 3: Browser ready at localhost:3000

---

## 💡 Tips

### Run Both Servers Together (Advanced)
From root directory:
```bash
npm run dev
```

This uses `concurrently` to run both servers at once.

### Watch for Changes
- **Frontend**: Auto-reloads on file changes
- **Backend**: Use `nodemon` for auto-restart
  ```bash
  cd backend
  npm install nodemon
  npx nodemon src/server.js
  ```

### Database Reset
To clear all data:
```bash
mongo zerodha-clone
db.dropDatabase()
exit
```

---

## 🚀 You're Ready!

Everything is installed and configured. Just:
1. Start MongoDB
2. Start Backend (Terminal 1)
3. Start Frontend (Terminal 2)
4. Open http://localhost:3000

**Happy Trading! 📈**
