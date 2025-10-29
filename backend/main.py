from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers import articles, legends, decks, builder, community, trading

app = FastAPI(
    title="Dalarnia Legends Fan Site API",
    description="Backend API for Dalarnia Legends fan site",
    version="1.0.0"
)

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(articles.router, prefix="/api/articles", tags=["articles"])
app.include_router(legends.router, prefix="/api/legends", tags=["legends"])
app.include_router(decks.router, prefix="/api/decks", tags=["decks"])
app.include_router(builder.router, prefix="/api/builder", tags=["builder"])
app.include_router(community.router, prefix="/api/community", tags=["community"])
app.include_router(trading.router, prefix="/api/trading", tags=["trading"])

@app.get("/")
async def root():
    return {
        "message": "Welcome to Dalarnia Legends Fan Site API",
        "docs": "/docs",
        "version": "1.0.0"
    }

@app.get("/api/health")
async def health_check():
    return {"status": "healthy"}

