import { Outlet, NavLink } from 'react-router-dom'
import './Community.css'

function Community() {
  const communityLinks = [
    { name: 'Discussion Board', path: '/community/board' },
    { name: 'Community Links', path: '/community/links' },
    { name: 'Contacts', path: '/community/contacts' },
  ]

  return (
    <div className="community-page">
      <div className="container">
        <h1 className="page-title">Community Hub</h1>
        
        <nav className="community-nav">
          {communityLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `community-link ${isActive ? 'active' : ''}`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="community-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Community

