import { Outlet, NavLink } from 'react-router-dom'
import './Articles.css'

function Articles() {
  const categories = [
    { name: 'All Articles', path: '/articles/all' },
    { name: 'News', path: '/articles/news' },
    { name: 'Patch Notes', path: '/articles/patch_notes' },
    { name: 'Announcements', path: '/articles/announcements' },
    { name: 'Guides', path: '/articles/guides' },
    { name: 'Events', path: '/articles/events' },
    { name: 'FAQ', path: '/articles/faq' },
  ]

  return (
    <div className="articles-page">
      <div className="container">
        <h1 className="page-title">Articles</h1>
        
        <nav className="category-nav">
          {categories.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              className={({ isActive }) => 
                `category-link ${isActive ? 'active' : ''}`
              }
            >
              {category.name}
            </NavLink>
          ))}
        </nav>

        <div className="articles-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Articles

