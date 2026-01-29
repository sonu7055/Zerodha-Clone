# Development Setup for Contributors

## IDE Recommendations

### VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- MongoDB for VS Code
- REST Client
- Prettier - Code formatter
- ESLint
- Thunder Client (API testing)

## Development Commands

### Run in Development Mode
```bash
npm run dev
```

### Debug Backend
```bash
cd backend
node --inspect src/server.js
```

### Debug Frontend
- Open Chrome DevTools (F12)
- Check React DevTools browser extension

## Code Structure

### Backend Structure
```
src/
├── models/       - Database schemas
├── routes/       - API routes
├── controllers/  - Business logic
├── middleware/   - Authentication, validation
└── server.js     - Main server file
```

### Frontend Structure
```
src/
├── components/   - Reusable components
├── pages/        - Page components
├── styles/       - CSS files
├── App.jsx       - Main app component
└── index.js      - Entry point
```

## Code Standards

### Backend
- Use async/await for asynchronous operations
- Follow MVC pattern
- Handle errors with try-catch
- Validate input in controllers
- Use meaningful variable names

### Frontend
- Use functional components with hooks
- Separate concerns (components, pages, styles)
- Use prop-types for type checking
- Handle errors gracefully
- Optimize re-renders with memo, useMemo

## Testing

### Add Jest for Backend Tests
```bash
npm install --save-dev jest
```

### Add Testing Library for Frontend
```bash
npm install --save-dev @testing-library/react
```

## Common Issues & Solutions

### CORS Error
```javascript
// Add to backend server.js
app.use(cors({
  origin: process.env.CORS_ORIGIN || 'http://localhost:3000'
}));
```

### Hydration Error
Ensure client-side rendering matches server-side

### Memory Leaks
- Clean up event listeners in useEffect
- Cancel fetch requests on component unmount
- Avoid circular references in state

## Performance Optimization

### Frontend
- Code splitting with React.lazy
- Image optimization
- Minify CSS/JS
- Lazy load routes
- Memoize expensive computations

### Backend
- Index MongoDB queries
- Cache frequently accessed data
- Implement pagination
- Use connection pooling
- Optimize database queries

## Security Best Practices

### Backend
- Validate all inputs
- Use parameterized queries
- Hash passwords with bcrypt
- Implement rate limiting
- Use HTTPS
- Set secure headers

### Frontend
- Never store sensitive data in localStorage
- Use httpOnly cookies for tokens
- Validate user input
- Escape HTML content
- Use Content Security Policy

## Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Make changes and commit
git add .
git commit -m "Add feature description"

# Push to remote
git push origin feature/feature-name

# Create pull request
```

## Debugging Tips

### Backend
- Use console.log for debugging
- Use Node debugger
- Check MongoDB logs
- Verify API endpoints with Postman

### Frontend
- Use React DevTools
- Use console logs
- Use Network tab to check API calls
- Use Performance tab for profiling

## Resources

- [MERN Stack Documentation](https://mern.io/)
- [Express.js Guide](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [MDN Web Docs](https://developer.mozilla.org/)
