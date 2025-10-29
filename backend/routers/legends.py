from fastapi import APIRouter, HTTPException
from typing import List, Optional
from models import Legend

router = APIRouter()

# Mock data for demonstration
mock_legends = [
    Legend(
        id=1,
        name="Nexus Warrior",
        description="A powerful warrior from the Nexus dimension",
        rarity="Legendary",
        stats={"attack": 85, "defense": 70, "speed": 60},
        abilities=["Power Strike", "Shield Bash", "Battle Cry"]
    ),
    Legend(
        id=2,
        name="Stellar Mage",
        description="Master of cosmic energy and stellar magic",
        rarity="Epic",
        stats={"attack": 60, "defense": 50, "speed": 80},
        abilities=["Meteor Storm", "Star Shield", "Cosmic Beam"]
    )
]

@router.get("/", response_model=List[Legend])
async def get_all_legends():
    """Get all legends"""
    return mock_legends

@router.get("/{legend_id}", response_model=Legend)
async def get_legend(legend_id: int):
    """Get a specific legend by ID"""
    for legend in mock_legends:
        if legend.id == legend_id:
            return legend
    raise HTTPException(status_code=404, detail="Legend not found")

@router.get("/filter/rarity/{rarity}", response_model=List[Legend])
async def get_legends_by_rarity(rarity: str):
    """Get legends filtered by rarity"""
    filtered = [l for l in mock_legends if l.rarity.lower() == rarity.lower()]
    return filtered

