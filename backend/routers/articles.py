from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models import Article, ArticleCategory
from datetime import datetime
import json
import os

router = APIRouter()

# Path to JSON data file
DATA_FILE = os.path.join(os.path.dirname(__file__), '..', 'data', 'articles.json')

def load_articles():
    """Load articles from JSON file"""
    try:
        with open(DATA_FILE, 'r', encoding='utf-8') as f:
            data = json.load(f)
            return [Article(**article) for article in data]
    except FileNotFoundError:
        # Fallback to mock data if file doesn't exist
        return [
            Article(
                id=1,
                title="Season 2 is Now Live!",
                category=ArticleCategory.NEWS,
                content="The highly anticipated Season 2 has arrived with new legends, challenges, and rewards!",
                author="Dalarnia Team",
                created_at=datetime(2025, 10, 20),
                tags=["season", "update"]
            ),
            Article(
                id=2,
                title="Patch 1.3.0 Notes",
                category=ArticleCategory.PATCH_NOTES,
                content="Balance changes, bug fixes, and new features in this patch.",
                author="Dev Team",
                created_at=datetime(2025, 10, 15),
                tags=["patch", "balance"]
            ),
            Article(
                id=3,
                title="Beginner's Guide to Dalarnia Legends",
                category=ArticleCategory.GUIDES,
                content="Everything you need to know to start your journey in Dalarnia Legends.",
                author="Community",
                created_at=datetime(2025, 10, 10),
                tags=["guide", "beginner"]
            )
        ]

def save_articles(articles: List[Article]):
    """Save articles to JSON file"""
    os.makedirs(os.path.dirname(DATA_FILE), exist_ok=True)
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        data = [article.model_dump(mode='json') for article in articles]
        json.dump(data, f, indent=2, ensure_ascii=False)

# Load articles on startup
mock_articles = load_articles()

@router.get("/all", response_model=List[Article])
async def get_all_articles(limit: Optional[int] = 20):
    """Get all articles"""
    articles = load_articles()
    return articles[:limit]

@router.get("/{category}", response_model=List[Article])
async def get_articles_by_category(category: ArticleCategory, limit: Optional[int] = 20):
    """Get articles by category"""
    articles = load_articles()
    filtered = [a for a in articles if a.category == category]
    return filtered[:limit]

@router.get("/detail/{article_id}", response_model=Article)
async def get_article(article_id: int):
    """Get a specific article by ID"""
    articles = load_articles()
    for article in articles:
        if article.id == article_id:
            return article
    raise HTTPException(status_code=404, detail="Article not found")

@router.post("/", response_model=Article)
async def create_article(article: Article):
    """Create a new article"""
    articles = load_articles()
    
    # Auto-generate ID if not provided
    if not article.id or article.id == 0:
        article.id = max([a.id for a in articles], default=0) + 1
    
    articles.append(article)
    save_articles(articles)
    return article

@router.put("/{article_id}", response_model=Article)
async def update_article(article_id: int, updated_article: Article):
    """Update an existing article"""
    articles = load_articles()
    
    for i, article in enumerate(articles):
        if article.id == article_id:
            updated_article.id = article_id
            articles[i] = updated_article
            save_articles(articles)
            return updated_article
    
    raise HTTPException(status_code=404, detail="Article not found")

@router.delete("/{article_id}")
async def delete_article(article_id: int):
    """Delete an article"""
    articles = load_articles()
    
    for i, article in enumerate(articles):
        if article.id == article_id:
            deleted = articles.pop(i)
            save_articles(articles)
            return {"message": "Article deleted", "article": deleted}
    
    raise HTTPException(status_code=404, detail="Article not found")
