# Deployment Guide

## Deploying to Heroku

### Prerequisites
- Heroku account (https://www.heroku.com)
- Heroku CLI installed
- Git initialized in project

### Backend Deployment

1. **Create Heroku app**
```bash
heroku create your-app-name
```

2. **Add MongoDB Atlas**
```bash
heroku addons:create mongolab
```

3. **Set environment variables**
```bash
heroku config:set JWT_SECRET=your-production-secret-key
heroku config:set NODE_ENV=production
```

4. **Deploy**
```bash
git push heroku main
```

### Frontend Deployment

#### Option 1: Deploy to Netlify

1. **Build frontend**
```bash
cd frontend
npm run build
```

2. **Connect to Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

3. **Set environment variable**
Update `.env` to point to your Heroku backend:
```
REACT_APP_API_URL=https://your-app-name.herokuapp.com
```

#### Option 2: Deploy with Heroku Static Buildpack

1. **Create Procfile** in root:
```
web: npm run build && npm start
```

2. **Deploy**
```bash
git push heroku main
```

## Environment Variables for Production

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/zerodha-clone
JWT_SECRET=your-very-secure-random-key-here
NODE_ENV=production
CORS_ORIGIN=https://your-frontend-url.com
```

### Frontend (.env.production)
```
REACT_APP_API_URL=https://your-backend-url.com
```

## Deployment Checklist

- [ ] Change JWT_SECRET to a secure random key
- [ ] Update MONGODB_URI to production database
- [ ] Enable HTTPS
- [ ] Configure CORS for frontend domain
- [ ] Set NODE_ENV to production
- [ ] Add rate limiting
- [ ] Implement error logging
- [ ] Set up monitoring
- [ ] Enable database backups
- [ ] Configure CDN for static assets
- [ ] Set up SSL certificate
- [ ] Test all API endpoints
- [ ] Load test the application

## Scaling Considerations

1. **Database**: Use MongoDB Atlas for scalability
2. **Caching**: Implement Redis for frequently accessed data
3. **CDN**: Use CloudFront or Cloudflare for static assets
4. **Load Balancing**: Use Heroku's auto-scaling
5. **Monitoring**: Set up Sentry for error tracking

## Docker Deployment

### Create Dockerfile for Backend
```dockerfile
FROM node:16
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm", "start"]
```

### Create docker-compose.yml
```yaml
version: '3'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      MONGODB_URI: mongodb://mongo:27017/zerodha-clone
    depends_on:
      - mongo
  
  mongo:
    image: mongo:4.4
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mongo_data:
```

## Health Checks

Add health check endpoint to verify deployment:
```javascript
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'Server is running',
    timestamp: new Date(),
    uptime: process.uptime()
  });
});
```

Test: `curl https://your-app.herokuapp.com/api/health`
