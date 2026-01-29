@echo off
REM Quick Setup Script for Zerodha Clone (Windows)

echo Setting up Zerodha Clone Trading Platform...

REM Backend setup
echo.
echo Installing backend dependencies...
cd backend
call npm install

REM Create .env if it doesn't exist
if not exist .env (
  echo Creating .env file...
  (
    echo PORT=5000
    echo MONGODB_URI=mongodb://localhost:27017/zerodha-clone
    echo JWT_SECRET=your-secret-key-here-change-in-production
    echo NODE_ENV=development
  ) > .env
)

cd ..

REM Frontend setup
echo.
echo Installing frontend dependencies...
cd frontend
call npm install

REM Create .env if it doesn't exist
if not exist .env (
  echo Creating .env file...
  (
    echo REACT_APP_API_URL=http://localhost:5000
  ) > .env
)

cd ..

echo.
echo Setup complete!
echo.
echo To start the application:
echo   npm run dev
echo.
echo Or run them separately:
echo   Backend: npm run backend
echo   Frontend: npm run frontend
echo.
echo Make sure MongoDB is running on localhost:27017
