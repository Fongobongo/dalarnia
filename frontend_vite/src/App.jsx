import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Articles from './pages/Articles'
import ArticlesList from './pages/ArticlesList'
import Legends from './pages/Legends'
import Decks from './pages/Decks'
import Builder from './pages/Builder'
import Community from './pages/Community'
import Board from './pages/Board'
import Links from './pages/Links'
import Contacts from './pages/Contacts'
import Trading from './pages/Trading'
import Markets from './pages/Markets'
import BuyToken from './pages/BuyToken'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        
        {/* Articles Routes */}
        <Route path="articles" element={<Articles />}>
          <Route path="all" element={<ArticlesList category="all" />} />
          <Route path="news" element={<ArticlesList category="news" />} />
          <Route path="patch_notes" element={<ArticlesList category="patch_notes" />} />
          <Route path="announcements" element={<ArticlesList category="announcements" />} />
          <Route path="guides" element={<ArticlesList category="guides" />} />
          <Route path="events" element={<ArticlesList category="events" />} />
          <Route path="faq" element={<ArticlesList category="faq" />} />
        </Route>
        
        {/* Game Routes */}
        <Route path="legends" element={<Legends />} />
        <Route path="decks" element={<Decks />} />
        <Route path="builder" element={<Builder />} />
        
        {/* Community Routes */}
        <Route path="community" element={<Community />}>
          <Route path="board" element={<Board />} />
          <Route path="links" element={<Links />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
        
        {/* Trading Routes */}
        <Route path="trading" element={<Trading />}>
          <Route path="markets" element={<Markets />} />
          <Route path="buy_token" element={<BuyToken />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App

