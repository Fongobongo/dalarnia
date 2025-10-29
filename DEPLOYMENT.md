# Deployment Guide

This guide covers deployment options for the Dalarnia Legends fan site.

## Quick Deployment Options

### Option 1: All-in-One (Vercel Frontend + Backend)

**Frontend on Vercel:**
1. Push code to GitHub
2. Connect repository to Vercel
3. Configure:
   - Framework: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Set environment variable: `VITE_API_URL=https://your-backend-url.com/api`

**Backend on Railway:**
1. Sign up at railway.app
2. Create new project from GitHub repo
3. Select `backend` directory
4. Railway auto-detects Python and installs dependencies
5. Set environment variables if needed
6. Get deployment URL

### Option 2: DigitalOcean App Platform

**Full Stack Deployment:**
1. Create new App in DigitalOcean
2. Connect GitHub repository
3. Configure two components:
   - **Web Service (Backend)**
     - Source: `backend/`
     - Run Command: `uvicorn main:app --host 0.0.0.0 --port 8000`
     - HTTP Port: 8000
   - **Static Site (Frontend)**
     - Source: `frontend/`
     - Build Command: `npm run build`
     - Output Directory: `dist`

### Option 3: Traditional VPS (Linux Server)

**Requirements:**
- Ubuntu 20.04+ or similar
- Domain name
- SSL certificate (Let's Encrypt)

**Backend Setup:**

1. SSH into server and install dependencies:
```bash
sudo apt update
sudo apt install python3 python3-pip python3-venv nginx -y
```

2. Clone repository and setup:
```bash
git clone https://github.com/yourusername/dalarnia-fansite.git
cd dalarnia-fansite/backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
pip install gunicorn
```

3. Create systemd service:
```bash
sudo nano /etc/systemd/system/dalarnia-api.service
```

Add:
```ini
[Unit]
Description=Dalarnia API
After=network.target

[Service]
User=www-data
WorkingDirectory=/var/www/dalarnia-fansite/backend
Environment="PATH=/var/www/dalarnia-fansite/backend/venv/bin"
ExecStart=/var/www/dalarnia-fansite/backend/venv/bin/gunicorn -w 4 -k uvicorn.workers.UvicornWorker main:app --bind 0.0.0.0:8000

[Install]
WantedBy=multi-user.target
```

4. Start service:
```bash
sudo systemctl start dalarnia-api
sudo systemctl enable dalarnia-api
```

**Frontend Setup:**

1. Install Node.js:
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install nodejs -y
```

2. Build frontend:
```bash
cd ../frontend
npm install
npm run build
```

3. Configure Nginx:
```bash
sudo nano /etc/nginx/sites-available/dalarnia.fun
```

Add:
```nginx
server {
    listen 80;
    server_name dalarnia.fun www.dalarnia.fun;

    # Frontend
    location / {
        root /var/www/dalarnia-fansite/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

4. Enable site and restart Nginx:
```bash
sudo ln -s /etc/nginx/sites-available/dalarnia.fun /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

5. Setup SSL with Certbot:
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d dalarnia.fun -d www.dalarnia.fun
```

## Docker Deployment

**Backend Dockerfile** (`backend/Dockerfile`):
```dockerfile
FROM python:3.9-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

**Frontend Dockerfile** (`frontend/Dockerfile`):
```dockerfile
FROM node:18-alpine as build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose** (`docker-compose.yml`):
```yaml
version: '3.8'

services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"
    environment:
      - DATABASE_URL=${DATABASE_URL}
    restart: unless-stopped

  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
    restart: unless-stopped
```

Run with:
```bash
docker-compose up -d
```

## Database Setup (Optional)

If you want to add a database:

**PostgreSQL on Railway/Heroku:**
1. Add PostgreSQL service
2. Get connection string
3. Update backend environment variable
4. Install SQLAlchemy: `pip install sqlalchemy psycopg2-binary`
5. Update models and routers to use database

**Example connection:**
```python
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DATABASE_URL = os.getenv("DATABASE_URL")
engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()
```

## Environment Variables

### Backend
- `DATABASE_URL` - PostgreSQL connection string
- `SECRET_KEY` - Secret key for sessions/JWT
- `CORS_ORIGINS` - Allowed CORS origins

### Frontend
- `VITE_API_URL` - Backend API URL

## Monitoring & Maintenance

### Health Checks
- Backend: `GET /api/health`
- Frontend: Check if homepage loads

### Logs
- Backend: Check systemd logs with `journalctl -u dalarnia-api`
- Nginx: `/var/log/nginx/access.log` and `/var/log/nginx/error.log`

### Updates
```bash
git pull
cd backend && source venv/bin/activate && pip install -r requirements.txt
sudo systemctl restart dalarnia-api
cd ../frontend && npm install && npm run build
sudo systemctl reload nginx
```

## Performance Optimization

1. **Enable Gzip compression** in Nginx
2. **Use CDN** for static assets (Cloudflare)
3. **Add caching headers** for API responses
4. **Optimize images** (use WebP format)
5. **Enable HTTP/2** in Nginx
6. **Use Redis** for caching (optional)

## Security Checklist

- [ ] HTTPS enabled
- [ ] CORS properly configured
- [ ] API rate limiting
- [ ] Input validation
- [ ] Security headers (CSP, HSTS)
- [ ] Regular updates
- [ ] Firewall configured
- [ ] Database credentials secured
- [ ] Error messages sanitized
- [ ] File upload validation (if applicable)

## Troubleshooting

### Backend not starting
- Check Python version (3.9+)
- Verify dependencies installed
- Check port 8000 not in use
- Review error logs

### Frontend not loading
- Clear browser cache
- Check API URL configuration
- Verify build completed successfully
- Check Nginx configuration

### API calls failing
- Check CORS settings
- Verify backend is running
- Check network/firewall rules
- Review browser console for errors

## Support

For deployment issues specific to this project, please create an issue on GitHub.

## Cost Estimates

**Free Tier Options:**
- Vercel (Frontend): Free
- Railway (Backend): Free tier available
- Total: **$0/month**

**Paid Options:**
- DigitalOcean Droplet: $6/month
- Vercel Pro: $20/month
- Railway Pro: $5/month
- Domain: ~$12/year
- Total: **$12-50/month** depending on configuration

