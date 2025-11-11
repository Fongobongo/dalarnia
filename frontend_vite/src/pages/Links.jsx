import { useState, useEffect } from 'react'
import axios from 'axios'
import './Links.css'

function Links() {
  const [links, setLinks] = useState({ official: [], community: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true)
      try {
        const response = await axios.get('/api/community/links')
        setLinks(response.data)
      } catch (error) {
        console.error('Error fetching links:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchLinks()
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return (
    <div className="links-page">
      <h2>Community Links</h2>
      <p className="links-intro">
        Connect with the Dalarnia Legends community across various platforms
      </p>

      <div className="links-sections">
        <div className="links-section card">
          <h3>🏛️ Official Links</h3>
          <div className="links-list">
            {links.official.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                <span className="link-name">{link.name}</span>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>

        <div className="links-section card">
          <h3>👥 Community Links</h3>
          <div className="links-list">
            {links.community.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-item"
              >
                <span className="link-name">{link.name}</span>
                <span className="link-arrow">→</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Links

