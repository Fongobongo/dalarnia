from fastapi import APIRouter, HTTPException
from typing import List
from models import Deck
from datetime import datetime

router = APIRouter()

# Mock data
mock_decks = [
    Deck(
        id=1,
        name="Aggressive Rush",
        description="Fast-paced deck focused on early game dominance",
        author="ProPlayer123",
        legends=[1, 2],
        created_at=datetime(2025, 10, 18),
        likes=156,
        views=1230
    )
]

@router.get("/", response_model=List[Deck])
async def get_all_decks():
    """Get all decks"""
    return mock_decks

@router.get("/{deck_id}", response_model=Deck)
async def get_deck(deck_id: int):
    """Get a specific deck by ID"""
    for deck in mock_decks:
        if deck.id == deck_id:
            return deck
    raise HTTPException(status_code=404, detail="Deck not found")

@router.post("/", response_model=Deck)
async def create_deck(deck: Deck):
    """Create a new deck"""
    mock_decks.append(deck)
    return deck

