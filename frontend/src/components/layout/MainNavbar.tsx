'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

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
    ],
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
    ],
  },
  {
    name: 'Trading',
    path: '/trading',
    submenu: [
      { name: 'Markets', path: '/trading/markets' },
      { name: 'Buy $D Token', path: '/trading/buy_token' },
    ],
  },
];

export function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path || pathname?.startsWith(`${path}/`);

  return (
    <nav className="navigation">
      <div className="container">
        <div className="nav-wrapper">
          <Link href="/" className="logo" onClick={() => setIsOpen(false)}>
            <span className="logo-text">DALARNIA</span>
            <span className="logo-accent">LEGENDS</span>
          </Link>

          <button
            className={`mobile-menu-btn ${isOpen ? 'active' : ''}`}
            onClick={() => setIsOpen((prev) => !prev)}
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
                  href={item.submenu ? item.submenu[0].path : item.path}
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
                {item.submenu && (
                  <ul className="submenu">
                    {item.submenu.map((subitem) => (
                      <li key={subitem.path}>
                        <Link
                          href={subitem.path}
                          className={`submenu-link ${pathname === subitem.path ? 'active' : ''}`}
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
  );
}
