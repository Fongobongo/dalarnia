# Dalarnia Legends Fan Site

Welcome to the unofficial Dalarnia Legends fan site! This is a community-driven project dedicated to providing resources, guides, and tools for Dalarnia Legends players.

## 🌟 Features

- **Articles & News**: Stay updated with the latest news, patch notes, announcements, guides, events, and FAQs
- **Legends Database**: Browse all legends with detailed stats, abilities, and information
- **Deck Builder**: Create and share your custom decks with the community
- **Community Hub**: Connect with other players through the discussion board, links, and contacts
- **Trading Marketplace**: View market items and get information about buying $D tokens

## 🚀 Tech Stack

### Frontend
- **React** 18.2.0 - UI library
- **React Router** 6.20.0 - Client-side routing
- **Vite** 5.0.8 - Build tool and dev server
- **Framer Motion** 10.16.16 - Animations
- **Axios** 1.6.2 - HTTP client

### Backend
- **FastAPI** 0.104.1 - Modern Python web framework
- **Uvicorn** 0.24.0 - ASGI server
- **Pydantic** 2.5.0 - Data validation

## 📁 Project Structure

```
dalarnia/
├── backend/
│   ├── main.py           # FastAPI application entry point
│   ├── models.py         # Pydantic models
│   ├── requirements.txt  # Python dependencies
│   └── routers/          # API route handlers
│       ├── articles.py
│       ├── legends.py
│       ├── decks.py
│       ├── builder.py
│       ├── community.py
│       └── trading.py
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        ├── App.jsx
        ├── components/   # Reusable components
        │   ├── Layout.jsx
        │   ├── Navigation.jsx
        │   └── Footer.jsx
        └── pages/        # Page components
            ├── Home.jsx
            ├── Articles.jsx
            ├── Legends.jsx
            ├── Decks.jsx
            ├── Builder.jsx
            ├── Community.jsx
            ├── Trading.jsx
            └── ...
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ and npm/yarn
- Python 3.9+
- pip

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment:
```bash
python -m venv venv
```

3. Activate the virtual environment:
- Windows:
```bash
venv\Scripts\activate
```
- Mac/Linux:
```bash
source venv/bin/activate
```

4. Install dependencies:
```bash
pip install -r requirements.txt
```

5. Run the FastAPI server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

The API will be available at `http://localhost:8000`
API documentation: `http://localhost:8000/docs`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3000`

## 🎨 Design Theme

The site features a sci-fi/space aesthetic matching the Dalarnia Legends game:
- Dark background with space elements
- Orange/gold primary colors (#f59e0b)
- Purple and cyan accent colors
- Futuristic UI with hexagonal patterns
- Custom fonts: Orbitron (headings) and Rajdhani (body)

## 📝 API Endpoints

### Articles
- `GET /api/articles/all` - Get all articles
- `GET /api/articles/{category}` - Get articles by category
- `GET /api/articles/detail/{id}` - Get specific article
- `POST /api/articles/` - Create new article

### Legends
- `GET /api/legends/` - Get all legends
- `GET /api/legends/{id}` - Get specific legend
- `GET /api/legends/filter/rarity/{rarity}` - Filter by rarity

### Decks
- `GET /api/decks/` - Get all decks
- `GET /api/decks/{id}` - Get specific deck
- `POST /api/decks/` - Create new deck

### Builder
- `GET /api/builder/available-legends` - Get legends for building
- `POST /api/builder/validate-deck` - Validate deck composition

### Community
- `GET /api/community/board` - Get discussion board posts
- `GET /api/community/links` - Get community links
- `GET /api/community/contacts` - Get contact information

### Trading
- `GET /api/trading/markets` - Get market items
- `GET /api/trading/buy_token` - Get token purchase info

## 🌐 Deployment

### Frontend Deployment (Vercel/Netlify)
```bash
cd frontend
npm run build
```
Deploy the `dist` folder to your hosting service.

### Backend Deployment (Railway/Heroku/DigitalOcean)
The backend can be deployed using any Python hosting service that supports FastAPI/ASGI applications.

## 🤝 Contributing

This is a fan-made project! Contributions are welcome:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This is an unofficial fan site and is not affiliated with the official Dalarnia Legends game.

## ⚠️ Disclaimer

This project is a fan-made website for the Dalarnia Legends community. It is not officially affiliated with or endorsed by the Dalarnia Legends game developers. All game-related content, trademarks, and assets belong to their respective owners.

## 📧 Contact

For questions or suggestions about this fan site, please visit the Contacts page or reach out through the Community Hub.

## 🙏 Acknowledgments

- Dalarnia Legends team for creating an amazing game
- The Dalarnia Legends community
- All contributors to this fan project

---

Made with ❤️ by the community for the community

