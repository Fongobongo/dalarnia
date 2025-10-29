import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Decks.css'

function Decks() {
  const [decks, setDecks] = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy] = useState('likes')

  useEffect(() => {
    const fetchDecks = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/decks/')
        setDecks(response.data)
      } catch (error) {
        console.error('Error fetching decks:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchDecks()
  }, [])

  const sortedDecks = [...decks].sort((a, b) => {
    if (sortBy === 'likes') return b.likes - a.likes
    if (sortBy === 'views') return b.views - a.views
    if (sortBy === 'date') return new Date(b.created_at) - new Date(a.created_at)
    return 0
  })

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="decks-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Community Decks</h1>
          <Link to="/builder" className="btn btn-primary">
            Create Deck
          </Link>
        </div>

        <div className="sort-section">
          <label>Sort by:</label>
          <div className="sort-buttons">
            <button 
              className={`sort-btn ${sortBy === 'likes' ? 'active' : ''}`}
              onClick={() => setSortBy('likes')}
            >
              Most Liked
            </button>
            <button 
              className={`sort-btn ${sortBy === 'views' ? 'active' : ''}`}
              onClick={() => setSortBy('views')}
            >
              Most Viewed
            </button>
            <button 
              className={`sort-btn ${sortBy === 'date' ? 'active' : ''}`}
              onClick={() => setSortBy('date')}
            >
              Newest
            </button>
          </div>
        </div>

        <div className="decks-grid">
          {sortedDecks.map((deck) => (
            <div key={deck.id} className="deck-card card">
              <div className="deck-header">
                <h3>{deck.name}</h3>
                <div className="deck-stats-mini">
                  <span title="Likes">❤️ {deck.likes}</span>
                  <span title="Views">👁️ {deck.views}</span>
                </div>
              </div>

              <p className="deck-description">{deck.description}</p>

              <div className="deck-info">
                <div className="deck-legends-count">
                  <span className="legend-icon">🎴</span>
                  <span>{deck.legends.length} Legends</span>
                </div>
                <span className="deck-author">by {deck.author}</span>
              </div>

              <div className="deck-date">
                {new Date(deck.created_at).toLocaleDateString()}
              </div>

              <div className="deck-actions">
                <button className="btn-deck-action">View Deck</button>
                <button className="btn-deck-action">Copy</button>
              </div>
            </div>
          ))}
        </div>

        {sortedDecks.length === 0 && (
          <div className="empty-state">
            <p>No decks found. Be the first to create one!</p>
            <Link to="/builder" className="btn btn-primary">
              Create First Deck
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Decks

