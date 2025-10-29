from fastapi import APIRouter, HTTPException
from typing import List
from models import CommunityPost
from datetime import datetime

router = APIRouter()

# Mock data
mock_posts = [
    CommunityPost(
        id=1,
        title="Best strategies for Season 2?",
        content="What are your top strategies for the new season?",
        author="GameEnthusiast",
        created_at=datetime(2025, 10, 21),
        replies=23,
        likes=45
    )
]

@router.get("/board", response_model=List[CommunityPost])
async def get_board_posts():
    """Get community board posts"""
    return mock_posts

@router.get("/board/{post_id}", response_model=CommunityPost)
async def get_post(post_id: int):
    """Get a specific post by ID"""
    for post in mock_posts:
        if post.id == post_id:
            return post
    raise HTTPException(status_code=404, detail="Post not found")

@router.get("/links")
async def get_community_links():
    """Get community links"""
    return {
        "official": [
            {"name": "Official Website", "url": "https://legends.dalarnia.com/"},
            {"name": "Discord", "url": "#"},
            {"name": "Twitter", "url": "#"}
        ],
        "community": [
            {"name": "Reddit", "url": "#"},
            {"name": "YouTube", "url": "#"}
        ]
    }

@router.get("/contacts")
async def get_contacts():
    """Get contact information"""
    return {
        "email": "contact@dalarnia.fun",
        "discord": "dalarnia-legends",
        "social_media": {
            "twitter": "@DalarniaLegends",
            "facebook": "DalarniaLegends"
        }
    }

