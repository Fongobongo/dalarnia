from fastapi import APIRouter
from typing import List
from models import Legend

router = APIRouter()

@router.get("/available-legends", response_model=List[Legend])
async def get_available_legends():
    """Get all legends available for deck building"""
    from routers.legends import mock_legends
    return mock_legends

@router.post("/validate-deck")
async def validate_deck(legend_ids: List[int]):
    """Validate if a deck composition is legal"""
    # Add deck validation logic here
    return {
        "valid": True,
        "message": "Deck is valid",
        "legend_count": len(legend_ids)
    }

