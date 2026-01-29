# Project Overview

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     CLIENT LAYER                             │
│  ┌──────────────────────────────────────────────────────┐   │
│  │           React Frontend (Port 3000)                │   │
│  │  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │   │
│  │  │    Home     │ │  Dashboard  │ │   Markets   │   │   │
│  │  └─────────────┘ └─────────────┘ └─────────────┘   │   │
│  │  ┌─────────────┐ ┌─────────────┐                   │   │
│  │  │   Login     │ │   Signup    │                   │   │
│  │  └─────────────┘ └─────────────┘                   │   │
│  │            ↓ AXIOS HTTP REQUESTS ↓                 │   │
│  └──────────────────────────────────────────────────────┘   │
└────────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────────┐
│                    API GATEWAY LAYER                           │
│              Express.js Server (Port 5000)                     │
├────────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────────┐  │
│  │           ROUTING LAYER                                │  │
│  │  /api/auth  /api/stocks  /api/portfolio  /api/orders   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │        CONTROLLER LAYER                                │  │
│  │  authController │ stockController │ portfolioController│  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │      MIDDLEWARE LAYER                                  │  │
│  │  JWT Authentication │ CORS │ Error Handling            │  │
│  └─────────────────────────────────────────────────────────┘  │
│                            ↓                                   │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │        MODEL LAYER (Mongoose Schemas)                  │  │
│  │  User │ Stock │ Portfolio │ Order                      │  │
│  └─────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────┘
                            ↓
┌────────────────────────────────────────────────────────────────┐
│                   DATABASE LAYER                               │
│                MongoDB (Port 27017)                            │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐           │
│  │   users      │ │   stocks     │ │   portfolios │           │
│  ├──────────────┤ ├──────────────┤ ├──────────────┤           │
│  │ - _id        │ │ - _id        │ │ - _id        │           │
│  │ - name       │ │ - symbol     │ │ - userId     │           │
│  │ - email      │ │ - name       │ │ - holdings   │           │
│  │ - password   │ │ - price      │ │ - totalValue │           │
│  │ - balance    │ │ - volume     │ │ - profitLoss │           │
│  └──────────────┘ └──────────────┘ └──────────────┘           │
│  ┌──────────────┐                                             │
│  │    orders    │                                             │
│  ├──────────────┤                                             │
│  │ - _id        │                                             │
│  │ - userId     │                                             │
│  │ - symbol     │                                             │
│  │ - type       │                                             │
│  │ - quantity   │                                             │
│  │ - status     │                                             │
│  └──────────────┘                                             │
└────────────────────────────────────────────────────────────────┘
```

## Data Flow

### 1. User Registration Flow
```
User Input (Signup Form)
    ↓
React Component (Signup.jsx)
    ↓
POST /api/auth/register
    ↓
authController.register()
    ↓
Hash Password (bcrypt)
    ↓
Save to MongoDB (User Model)
    ↓
Generate JWT Token
    ↓
Return Token + User Data
    ↓
Store in localStorage
    ↓
Navigate to Dashboard
```

### 2. Trading Flow
```
User Places Order (Markets Page)
    ↓
POST /api/orders/create
    ↓
Verify JWT Token (Middleware)
    ↓
orderController.createOrder()
    ↓
Check User Balance
    ↓
Update User Balance
    ↓
Create Order Record
    ↓
Update Portfolio
    ↓
Return Order Confirmation
    ↓
Update Frontend State
```

### 3. Portfolio View Flow
```
User Opens Dashboard
    ↓
GET /api/portfolio (with JWT)
    ↓
Verify JWT Token
    ↓
portfolioController.getPortfolio()
    ↓
Fetch from MongoDB
    ↓
Calculate Profit/Loss
    ↓
Return Portfolio Data
    ↓
Render Holdings Table
```

## API Call Examples

### Authentication Flow
```javascript
// 1. Register
POST /api/auth/register
{
  "name": "John",
  "email": "john@example.com",
  "password": "pass123",
  "confirmPassword": "pass123"
}
→ Returns: { token, user }

// 2. Login
POST /api/auth/login
{
  "email": "john@example.com",
  "password": "pass123"
}
→ Returns: { token, user }

// 3. All subsequent requests include token
GET /api/portfolio
Headers: { Authorization: "Bearer <token>" }
```

## Component Hierarchy

```
App
├── Navbar
│   ├── Logo
│   ├── Menu Links
│   └── Auth Buttons
├── Routes
│   ├── Home
│   │   ├── Hero Section
│   │   ├── Features
│   │   └── Stats
│   ├── Login
│   │   ├── Email Input
│   │   ├── Password Input
│   │   └── Submit Button
│   ├── Signup
│   │   ├── Name Input
│   │   ├── Email Input
│   │   ├── Password Inputs
│   │   └── Submit Button
│   ├── Dashboard
│   │   ├── Balance Cards
│   │   ├── Holdings Table
│   │   └── Market Overview
│   └── Markets
│       ├── Search Bar
│       └── Stock Cards Grid
└── Footer
    ├── About Section
    ├── Links
    └── Legal
```

## Key Technologies

| Layer | Technology | Purpose |
|-------|-----------|---------|
| Frontend | React 18 | UI Framework |
| Frontend | React Router | Navigation |
| Frontend | Axios | HTTP Client |
| Frontend | CSS3 | Styling |
| Backend | Express.js | Web Framework |
| Backend | Node.js | Runtime |
| Backend | MongoDB | Database |
| Backend | Mongoose | ODM |
| Security | JWT | Authentication |
| Security | bcrypt | Password Hashing |

## State Management

### Frontend
- React Hooks (useState, useEffect)
- localStorage for persistence
- Context API (can be added)

### Backend
- In-memory user sessions
- JWT for stateless auth
- MongoDB for persistence

## Security Layers

```
Request
  ↓
CORS Validation
  ↓
JWT Verification
  ↓
Input Validation
  ↓
Business Logic
  ↓
Database Query (Parameterized)
  ↓
Response Sanitization
  ↓
Client
```

## Performance Considerations

### Frontend
- Lazy loading of routes
- Component memoization
- Efficient re-renders
- CSS optimization

### Backend
- Connection pooling
- Query optimization
- Caching strategy
- Pagination support

## Scalability Path

1. **Add Redis** for caching
2. **Add WebSocket** for real-time data
3. **Add Message Queue** (RabbitMQ) for async tasks
4. **Add Load Balancer** for multiple servers
5. **Add Microservices** for specific domains
6. **Add Kubernetes** for container orchestration

## Future Features Integration

```
Current: Authentication → Orders → Portfolio

Phase 2: + Real-time Updates
         + Advanced Charts
         + Mobile App

Phase 3: + Options Trading
         + Margin Trading
         + Social Features

Phase 4: + AI Recommendations
         + Advanced Analytics
         + Algo Trading
```
