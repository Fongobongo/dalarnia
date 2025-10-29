import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navItems = [
    { name: 'Home', path: '/' },
    { 
      name: 'Articles', 
      path: '/articles',
      submenu: [
        { name: 'All Articles', path: '/articles/all' },
        { name: 'News', path: '/articles/news' },
        { name: 'Patch Notes', path: '/articles/patch_notes' },
        { name: 'Announcements', path: '/articles/announcements' },
        { name: 'Guides', path: '/articles/guides' },
        { name: 'Events', path: '/articles/events' },
        { name: 'FAQ', path: '/articles/faq' },
      ]
    },
    { name: 'Legends', path: '/legends' },
    { name: 'Decks', path: '/decks' },
    { name: 'Builder', path: '/builder' },
    { 
      name: 'Community', 
      path: '/community',
      submenu: [
        { name: 'Board', path: '/community/board' },
        { name: 'Links', path: '/community/links' },
        { name: 'Contacts', path: '/community/contacts' },
      ]
    },
    { 
      name: 'Trading', 
      path: '/trading',
      submenu: [
        { name: 'Markets', path: '/trading/markets' },
        { name: 'Buy $D Token', path: '/trading/buy_token' },
      ]
    },
  ]

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/" className="logo">
            <span className="logo-text">DALARNIA</span>
            <span className="logo-accent">LEGENDS</span>
          </Link>

          <button 
            className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.path}>
                        <Link 
                          to={subitem.path}
                          className={`submenu-link ${location.pathname === subitem.path ? 'active' : ''}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation

