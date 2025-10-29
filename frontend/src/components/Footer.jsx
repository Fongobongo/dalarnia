import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DALARNIA LEGENDS</h3>
            <p>Fan-made community website for Dalarnia Legends enthusiasts.</p>
            <p className="disclaimer">This is an unofficial fan site and is not affiliated with the official Dalarnia Legends game.</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="https://legends.dalarnia.com/" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              <li><a href="/articles/all">Articles</a></li>
              <li><a href="/legends">Legends</a></li>
              <li><a href="/decks">Decks</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li><a href="/community/board">Discussion Board</a></li>
              <li><a href="/community/links">Community Links</a></li>
              <li><a href="/community/contacts">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Trading</h4>
            <ul>
              <li><a href="/trading/markets">Markets</a></li>
              <li><a href="/trading/buy_token">Buy $D Token</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Dalarnia.fun - Unofficial Fan Site</p>
          <p>Made with ❤️ by the community</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

