# Dalarnia Legends Fan Site - Backend API

FastAPI backend for the Dalarnia Legends fan site.

## Quick Start

1. Create and activate virtual environment:
```bash
python -m venv venv

# Windows
venv\Scripts\activate

# Mac/Linux
source venv/bin/activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Run the server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

4. Access the API:
- API: http://localhost:8000
- Interactive docs: http://localhost:8000/docs
- Alternative docs: http://localhost:8000/redoc

## API Structure

### Main Application (`main.py`)
- FastAPI app initialization
- CORS middleware configuration
- Router registration
- Health check endpoint

### Models (`models.py`)
Pydantic models for data validation:
- `Article` - News, guides, patches, etc.
- `Legend` - Game characters with stats
- `Deck` - Player deck builds
- `CommunityPost` - Forum posts
- `MarketItem` - Marketplace listings

### Routers

#### Articles (`routers/articles.py`)
- Get all articles or filter by category
- Categories: news, patch_notes, announcements, guides, events, faq
- Create new articles

#### Legends (`routers/legends.py`)
- Browse all legends
- Filter by rarity (Common, Rare, Epic, Legendary)
- View detailed legend information

#### Decks (`routers/decks.py`)
- Community-shared deck builds
- Create and view decks
- Track likes and views

#### Builder (`routers/builder.py`)
- Deck building functionality
- Get available legends
- Validate deck compositions

#### Community (`routers/community.py`)
- Discussion board posts
- Community links
- Contact information

#### Trading (`routers/trading.py`)
- Marketplace items
- Token purchase information
- Exchange listings

## Development

### Adding New Endpoints

1. Create or modify router file in `routers/`
2. Define route handlers with appropriate decorators
3. Use Pydantic models for request/response validation
4. Import and register router in `main.py`

Example:
```python
from fastapi import APIRouter
from models import MyModel

router = APIRouter()

@router.get("/my-endpoint")
async def my_endpoint():
    return {"message": "Hello"}
```

### Database Integration

Currently uses mock data. To add database support:

1. Install database driver (e.g., `pip install sqlalchemy psycopg2-binary`)
2. Create database connection in `database.py`
3. Update models to use SQLAlchemy ORM
4. Modify routers to use database queries

### Environment Variables

Create a `.env` file based on `.env.example`:
```
DATABASE_URL=postgresql://user:password@localhost:5432/dalarnia
SECRET_KEY=your-secret-key-here
CORS_ORIGINS=http://localhost:3000
```

## Testing

Run tests with pytest:
```bash
pip install pytest pytest-asyncio
pytest
```

## Deployment

### Production Server

Use Gunicorn with Uvicorn workers:
```bash
pip install gunicorn
gunicorn main:app -w 4 -k uvicorn.workers.UvicornWorker
```

### Docker

Create `Dockerfile`:
```dockerfile
FROM python:3.9-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

Build and run:
```bash
docker build -t dalarnia-api .
docker run -p 8000:8000 dalarnia-api
```

## API Documentation

FastAPI automatically generates interactive API documentation:
- Swagger UI: `/docs`
- ReDoc: `/redoc`
- OpenAPI JSON: `/openapi.json`

