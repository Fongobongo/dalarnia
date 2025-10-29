import { useState, useEffect } from 'react'
import axios from 'axios'
import './Legends.css'

function Legends() {
  const [legends, setLegends] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedRarity, setSelectedRarity] = useState('all')

  useEffect(() => {
    const fetchLegends = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/legends/')
        setLegends(response.data)
      } catch (error) {
        console.error('Error fetching legends:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLegends()
  }, [])

  const filteredLegends = selectedRarity === 'all' 
    ? legends 
    : legends.filter(l => l.rarity.toLowerCase() === selectedRarity)

  const getRarityClass = (rarity) => {
    const rarityMap = {
      'legendary': 'rarity-legendary',
      'epic': 'rarity-epic',
      'rare': 'rarity-rare',
      'common': 'rarity-common'
    }
    return rarityMap[rarity.toLowerCase()] || 'rarity-common'
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="legends-page">
      <div className="container">
        <h1 className="page-title">Legends Database</h1>
        
        <div className="filter-section">
          <label>Filter by Rarity:</label>
          <div className="filter-buttons">
            <button 
              className={`filter-btn ${selectedRarity === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedRarity('all')}
            >
              All
            </button>
            <button 
              className={`filter-btn ${selectedRarity === 'legendary' ? 'active' : ''}`}
              onClick={() => setSelectedRarity('legendary')}
            >
              Legendary
            </button>
            <button 
              className={`filter-btn ${selectedRarity === 'epic' ? 'active' : ''}`}
              onClick={() => setSelectedRarity('epic')}
            >
              Epic
            </button>
            <button 
              className={`filter-btn ${selectedRarity === 'rare' ? 'active' : ''}`}
              onClick={() => setSelectedRarity('rare')}
            >
              Rare
            </button>
            <button 
              className={`filter-btn ${selectedRarity === 'common' ? 'active' : ''}`}
              onClick={() => setSelectedRarity('common')}
            >
              Common
            </button>
          </div>
        </div>

        <div className="legends-grid">
          {filteredLegends.map((legend) => (
            <div key={legend.id} className={`legend-card card ${getRarityClass(legend.rarity)}`}>
              <div className="legend-image-placeholder">
                <span className="legend-icon">⚔️</span>
              </div>
              
              <div className="legend-info">
                <div className="legend-header">
                  <h3>{legend.name}</h3>
                  <span className={`badge badge-${legend.rarity.toLowerCase()}`}>
                    {legend.rarity}
                  </span>
                </div>
                
                <p className="legend-description">{legend.description}</p>
                
                <div className="legend-stats">
                  <div className="stat">
                    <span className="stat-label">Attack</span>
                    <span className="stat-value">{legend.stats.attack}</span>
                    <div className="stat-bar">
                      <div 
                        className="stat-fill attack" 
                        style={{ width: `${legend.stats.attack}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Defense</span>
                    <span className="stat-value">{legend.stats.defense}</span>
                    <div className="stat-bar">
                      <div 
                        className="stat-fill defense" 
                        style={{ width: `${legend.stats.defense}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Speed</span>
                    <span className="stat-value">{legend.stats.speed}</span>
                    <div className="stat-bar">
                      <div 
                        className="stat-fill speed" 
                        style={{ width: `${legend.stats.speed}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
                
                <div className="legend-abilities">
                  <h4>Abilities:</h4>
                  <ul>
                    {legend.abilities.map((ability, index) => (
                      <li key={index}>{ability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Legends

