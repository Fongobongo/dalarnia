from fastapi import APIRouter, HTTPException
from typing import List
from models import MarketItem

router = APIRouter()

# Mock data
mock_market_items = [
    MarketItem(
        id=1,
        name="Legendary Nexus Warrior",
        price=150.00,
        currency="DAR",
        seller="Trader123",
        rarity="Legendary"
    ),
    MarketItem(
        id=2,
        name="Epic Stellar Mage",
        price=75.50,
        currency="DAR",
        seller="ProSeller",
        rarity="Epic"
    )
]

@router.get("/markets", response_model=List[MarketItem])
async def get_market_items():
    """Get all market items"""
    return mock_market_items

@router.get("/markets/{item_id}", response_model=MarketItem)
async def get_market_item(item_id: int):
    """Get a specific market item by ID"""
    for item in mock_market_items:
        if item.id == item_id:
            return item
    raise HTTPException(status_code=404, detail="Item not found")

@router.get("/buy_token")
async def get_token_info():
    """Get information about buying $D token"""
    return {
        "token_name": "Dalarnia Token",
        "symbol": "DAR",
        "exchanges": [
            {"name": "Binance", "url": "#"},
            {"name": "KuCoin", "url": "#"},
            {"name": "Gate.io", "url": "#"}
        ],
        "current_price": "$0.15",
        "market_cap": "$45M"
    }

