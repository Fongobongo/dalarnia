import Link from "next/link";

export function AppFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>DALARNIA LEGENDS</h3>
            <p>Fan-made community website for Dalarnia Legends enthusiasts.</p>
            <p className="disclaimer">
              This is an unofficial fan site and is not affiliated with the official Dalarnia Legends game.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li>
                <a href="https://legends.dalarnia.com/" target="_blank" rel="noopener noreferrer">
                  Official Website
                </a>
              </li>
              <li>
                <Link href="/articles/all">Articles</Link>
              </li>
              <li>
                <Link href="/legends">Legends</Link>
              </li>
              <li>
                <Link href="/decks">Decks</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Community</h4>
            <ul>
              <li>
                <Link href="/community/board">Discussion Board</Link>
              </li>
              <li>
                <Link href="/community/links">Community Links</Link>
              </li>
              <li>
                <Link href="/community/contacts">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Trading</h4>
            <ul>
              <li>
                <Link href="/trading/markets">Markets</Link>
              </li>
              <li>
                <Link href="/trading/buy_token">Buy $D Token</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2025 Dalarnia.fun - Unofficial Fan Site</p>
          <p>Made with ❤️ by the community</p>
        </div>
      </div>
    </footer>
  );
}
