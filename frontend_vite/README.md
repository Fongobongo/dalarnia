# Dalarnia Legends Fan Site - Frontend

React frontend for the Dalarnia Legends fan site, built with Vite.

## Quick Start

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Open http://localhost:3000

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── main.jsx          # App entry point
├── App.jsx           # Main app component with routing
├── App.css           # Global app styles
├── index.css         # Global CSS variables and resets
│
├── components/       # Reusable components
│   ├── Layout.jsx    # Main layout wrapper
│   ├── Navigation.jsx # Top navigation bar
│   └── Footer.jsx    # Site footer
│
└── pages/            # Page components
    ├── Home.jsx      # Landing page
    ├── Articles.jsx  # Articles hub
    ├── Legends.jsx   # Legends database
    ├── Decks.jsx     # Deck showcase
    ├── Builder.jsx   # Deck builder
    ├── Community.jsx # Community hub
    ├── Trading.jsx   # Trading hub
    └── ...
```

## Styling

### Design System

The app uses a custom design system with CSS variables:

```css
/* Colors */
--color-primary: #f59e0b;          /* Orange/Gold */
--color-secondary: #8b5cf6;        /* Purple */
--color-accent: #06b6d4;           /* Cyan */
--color-bg-dark: #0a0e1a;          /* Dark background */
--color-text-primary: #ffffff;     /* White text */

/* Fonts */
--font-primary: 'Orbitron';        /* Headings */
--font-secondary: 'Rajdhani';      /* Body text */

/* Spacing */
--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 1.5rem;
--spacing-xl: 2rem;
--spacing-2xl: 3rem;
```

### Component Styling

Each component has its own CSS file:
- Use the design system variables
- Follow BEM naming convention when needed
- Keep styles scoped to component

### Responsive Design

Breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Routing

Using React Router v6:

```jsx
<Route path="/" element={<Layout />}>
  <Route index element={<Home />} />
  <Route path="articles" element={<Articles />}>
    <Route path="all" element={<ArticlesList />} />
    <Route path="news" element={<ArticlesList />} />
    {/* ... */}
  </Route>
  {/* ... */}
</Route>
```

## API Integration

### Axios Configuration

API calls are made to the FastAPI backend:

```javascript
import axios from 'axios'

// In development, proxy is configured in vite.config.js
const response = await axios.get('/api/legends/')
```

### Development Proxy

The Vite dev server proxies API requests:

```javascript
// vite.config.js
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      changeOrigin: true,
    }
  }
}
```

## Animations

Using Framer Motion for smooth animations:

```jsx
import { motion } from 'framer-motion'

<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  {/* content */}
</motion.div>
```

## Building for Production

1. Build the app:
```bash
npm run build
```

2. Output will be in `dist/` folder

3. Test production build locally:
```bash
npm run preview
```

## Deployment

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the app:
```bash
npm run build
```

2. Deploy `dist/` folder to Netlify

### Environment Variables

For production, set these environment variables:
- `VITE_API_URL` - Backend API URL

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL || '/api'
```

## Adding New Pages

1. Create page component in `src/pages/`:
```jsx
// src/pages/MyPage.jsx
import './MyPage.css'

function MyPage() {
  return (
    <div className="my-page">
      <h1>My Page</h1>
    </div>
  )
}

export default MyPage
```

2. Create corresponding CSS file:
```css
/* src/pages/MyPage.css */
.my-page {
  /* styles */
}
```

3. Add route in `App.jsx`:
```jsx
<Route path="my-page" element={<MyPage />} />
```

4. Add navigation link in `Navigation.jsx`

## Best Practices

- Use functional components and hooks
- Keep components small and focused
- Extract reusable logic into custom hooks
- Use semantic HTML elements
- Optimize images and assets
- Implement loading states
- Handle errors gracefully
- Write accessible markup

## Performance Tips

- Use `React.lazy()` for code splitting
- Optimize images (WebP format)
- Minimize bundle size
- Use production build for deployment
- Enable caching headers
- Use CDN for static assets

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Port 3000 already in use
Change port in `vite.config.js`:
```javascript
server: {
  port: 3001
}
```

### API calls failing
Check that backend is running on port 8000

### Styles not loading
Clear browser cache and restart dev server

