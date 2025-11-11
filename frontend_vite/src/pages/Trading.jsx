import { Outlet, NavLink } from 'react-router-dom'
import './Trading.css'

function Trading() {
  const tradingLinks = [
    { name: 'Marketplace', path: '/trading/markets' },
    { name: 'Buy $D Token', path: '/trading/buy_token' },
  ]

  return (
    <div className="trading-page">
      <div className="container">
        <h1 className="page-title">Trading Hub</h1>
        
        <nav className="trading-nav">
          {tradingLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `trading-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="trading-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Trading

