# API Documentation

## Base URL
```
http://localhost:5000/api
```

## Authentication
All protected endpoints require JWT token in Authorization header:
```
Authorization: Bearer <token>
```

---

## Authentication Endpoints

### Register
**POST** `/auth/register`

Request body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

Response:
```json
{
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "accountBalance": 100000
  }
}
```

### Login
**POST** `/auth/login`

Request body:
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Response: Same as Register

### Get Profile
**GET** `/auth/profile`

Headers: `Authorization: Bearer <token>`

Response:
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "address": "123 Main St",
  "accountBalance": 95000,
  "createdAt": "2024-01-15T10:30:00Z"
}
```

### Update Profile
**PUT** `/auth/profile`

Headers: `Authorization: Bearer <token>`

Request body:
```json
{
  "name": "Jane Doe",
  "phone": "9876543210",
  "address": "456 Oak Ave",
  "city": "Mumbai",
  "state": "Maharashtra",
  "pincode": "400001"
}
```

---

## Stock Endpoints

### Get All Stocks
**GET** `/stocks`

Response:
```json
[
  {
    "_id": "507f1f77bcf86cd799439011",
    "symbol": "TCS",
    "name": "Tata Consultancy Services",
    "currentPrice": 3850.25,
    "openPrice": 3820.00,
    "highPrice": 3890.50,
    "volume": 1800000,
    "lastUpdate": "2024-01-15T14:30:00Z"
  }
]
```

### Get Stock by Symbol
**GET** `/stocks/:symbol`

Example: `/stocks/TCS`

### Search Stocks
**GET** `/stocks/search?query=TCS`

### Get Top Gainers
**GET** `/stocks/gainers`

### Get Top Losers
**GET** `/stocks/losers`

### Add Stock (Admin)
**POST** `/stocks/add`

Request body:
```json
{
  "symbol": "RELIANCE",
  "name": "Reliance Industries",
  "currentPrice": 2850.50,
  "openPrice": 2820.00,
  "highPrice": 2890.75,
  "lowPrice": 2810.00,
  "closePrice": 2850.50,
  "volume": 2500000,
  "industryType": "Petrochemicals"
}
```

---

## Portfolio Endpoints

### Get Portfolio
**GET** `/portfolio`

Headers: `Authorization: Bearer <token>`

Response:
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "userId": "507f1f77bcf86cd799439011",
  "holdings": [
    {
      "symbol": "TCS",
      "quantity": 10,
      "averagePrice": 3800.00,
      "currentPrice": 3850.25,
      "totalInvested": 38000,
      "currentValue": 38502.50,
      "profitLoss": 502.50,
      "profitLossPercentage": 1.32
    }
  ],
  "totalInvested": 38000,
  "totalCurrentValue": 38502.50,
  "totalProfitLoss": 502.50
}
```

### Add Holding
**POST** `/portfolio/add`

Headers: `Authorization: Bearer <token>`

Request body:
```json
{
  "symbol": "TCS",
  "quantity": 10,
  "averagePrice": 3800.00,
  "currentPrice": 3850.25
}
```

### Remove Holding
**DELETE** `/portfolio/:symbol`

Headers: `Authorization: Bearer <token>`

Example: `/portfolio/TCS`

---

## Order Endpoints

### Create Order
**POST** `/orders/create`

Headers: `Authorization: Bearer <token>`

Request body:
```json
{
  "symbol": "TCS",
  "stockName": "Tata Consultancy Services",
  "orderType": "BUY",
  "quantity": 10,
  "price": 3850.25
}
```

Response:
```json
{
  "_id": "507f1f77bcf86cd799439011",
  "userId": "507f1f77bcf86cd799439011",
  "symbol": "TCS",
  "orderType": "BUY",
  "quantity": 10,
  "price": 3850.25,
  "totalAmount": 38502.50,
  "status": "COMPLETED",
  "orderTime": "2024-01-15T14:30:00Z",
  "executionTime": "2024-01-15T14:30:05Z"
}
```

### Get All Orders
**GET** `/orders`

Headers: `Authorization: Bearer <token>`

### Get Order by ID
**GET** `/orders/:id`

Headers: `Authorization: Bearer <token>`

### Cancel Order
**PUT** `/orders/:id/cancel`

Headers: `Authorization: Bearer <token>`

---

## Error Responses

### 400 Bad Request
```json
{
  "message": "Please provide all required fields"
}
```

### 401 Unauthorized
```json
{
  "message": "Invalid token"
}
```

### 404 Not Found
```json
{
  "message": "Stock not found"
}
```

### 500 Server Error
```json
{
  "message": "Server error",
  "error": "Error details"
}
```

---

## HTTP Status Codes

| Code | Meaning |
|------|---------|
| 200 | OK - Request successful |
| 201 | Created - Resource created |
| 400 | Bad Request - Invalid input |
| 401 | Unauthorized - Missing/invalid token |
| 404 | Not Found - Resource not found |
| 500 | Server Error |

---

## Testing with Curl

### Register
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"test123","confirmPassword":"test123"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"john@test.com","password":"test123"}'
```

### Get Stocks
```bash
curl http://localhost:5000/api/stocks
```

### Create Order (with token)
```bash
curl -X POST http://localhost:5000/api/orders/create \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer <token>" \
  -d '{"symbol":"TCS","stockName":"Tata Consultancy Services","orderType":"BUY","quantity":10,"price":3850.25}'
```
