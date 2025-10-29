# Quick Start Guide

Get the Dalarnia Legends fan site running in 5 minutes!

## Prerequisites

Make sure you have installed:
- **Python 3.9+** - [Download Python](https://www.python.org/downloads/)
- **Node.js 16+** - [Download Node.js](https://nodejs.org/)
- **Git** - [Download Git](https://git-scm.com/)

Verify installations:
```bash
python --version
node --version
npm --version
```

## Step 1: Clone or Navigate to Project

If you haven't already:
```bash
git clone <your-repo-url>
cd dalarnia
```

## Step 2: Backend Setup (Terminal 1)

### Windows
```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Mac/Linux
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

✅ Backend running at: http://localhost:8000
📚 API docs: http://localhost:8000/docs

## Step 3: Frontend Setup (Terminal 2)

Open a **new terminal window** and run:

```bash
cd frontend
npm install
npm run dev
```

✅ Frontend running at: http://localhost:3000

## Step 4: Open in Browser

Visit: **http://localhost:3000**

You should see the Dalarnia Legends fan site homepage! 🎉

## Testing the Site

Try these pages:
- **Home**: http://localhost:3000/
- **Articles**: http://localhost:3000/articles/all
- **Legends**: http://localhost:3000/legends
- **Deck Builder**: http://localhost:3000/builder
- **Community**: http://localhost:3000/community/board
- **Trading**: http://localhost:3000/trading/markets

## Stopping the Servers

### Stop Backend
Press `Ctrl+C` in the backend terminal

### Stop Frontend
Press `Ctrl+C` in the frontend terminal

### Deactivate Python Virtual Environment
```bash
deactivate
```

## Next Time You Run

You don't need to reinstall dependencies. Just:

**Terminal 1 (Backend):**
```bash
cd backend
# Windows: venv\Scripts\activate
# Mac/Linux: source venv/bin/activate
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

**Terminal 2 (Frontend):**
```bash
cd frontend
npm run dev
```

## Common Issues

### Port 8000 already in use
```bash
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:8000 | xargs kill -9
```

### Port 3000 already in use
Edit `frontend/vite.config.js` and change the port:
```javascript
server: {
  port: 3001  // or any other port
}
```

### Python command not found
Use `python3` instead of `python`

### Module not found errors
Reinstall dependencies:
```bash
# Backend
cd backend
pip install -r requirements.txt

# Frontend
cd frontend
rm -rf node_modules
npm install
```

### CORS errors
Make sure both backend (port 8000) and frontend (port 3000) are running

## Development Tips

### Auto-reload
Both servers support auto-reload:
- **Backend**: Changes to `.py` files automatically restart the server
- **Frontend**: Changes to React components automatically refresh the browser

### API Documentation
Visit http://localhost:8000/docs for interactive API documentation

### Browser DevTools
Press `F12` to open developer tools and check for errors in the Console tab

### Code Editor
Recommended: [VS Code](https://code.visualstudio.com/) with these extensions:
- Python
- ESLint
- Prettier
- Auto Rename Tag

## Project Structure

```
dalarnia/
├── backend/              # FastAPI backend
│   ├── main.py          # Main app
│   ├── models.py        # Data models
│   ├── routers/         # API routes
│   └── requirements.txt # Python deps
│
└── frontend/            # React frontend
    ├── src/
    │   ├── main.jsx    # Entry point
    │   ├── App.jsx     # Routes
    │   ├── components/ # Reusable components
    │   └── pages/      # Page components
    └── package.json    # Node deps
```

## What's Next?

- Read [README.md](README.md) for detailed information
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for production deployment
- Customize the site by editing components in `frontend/src/`
- Add real data by modifying routers in `backend/routers/`

## Need Help?

- Check the [README.md](README.md) for more details
- Review the API docs at http://localhost:8000/docs
- Open an issue on GitHub

---

Happy coding! 🚀

