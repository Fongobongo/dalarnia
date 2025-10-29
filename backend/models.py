from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime
from enum import Enum

class ArticleCategory(str, Enum):
    NEWS = "news"
    PATCH_NOTES = "patch_notes"
    ANNOUNCEMENTS = "announcements"
    GUIDES = "guides"
    EVENTS = "events"
    FAQ = "faq"

class Article(BaseModel):
    id: int
    title: str
    category: ArticleCategory
    content: str
    author: str
    created_at: datetime = Field(default_factory=datetime.now)
    updated_at: Optional[datetime] = None
    image_url: Optional[str] = None
    tags: List[str] = []

class Legend(BaseModel):
    id: int
    name: str
    description: str
    rarity: str
    image_url: Optional[str] = None
    stats: dict
    abilities: List[str]

class Deck(BaseModel):
    id: int
    name: str
    description: str
    author: str
    legends: List[int]
    created_at: datetime = Field(default_factory=datetime.now)
    likes: int = 0
    views: int = 0

class CommunityPost(BaseModel):
    id: int
    title: str
    content: str
    author: str
    created_at: datetime = Field(default_factory=datetime.now)
    replies: int = 0
    likes: int = 0

class MarketItem(BaseModel):
    id: int
    name: str
    price: float
    currency: str
    seller: str
    rarity: str
    image_url: Optional[str] = None

