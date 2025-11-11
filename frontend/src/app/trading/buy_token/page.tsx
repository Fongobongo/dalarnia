'use client';

import { useEffect, useState } from "react";

import type { TokenInfo } from "@/types";

export default function BuyTokenPage() {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTokenInfo = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/trading/buy_token");
        const data = await response.json();
        setTokenInfo(data);
      } catch (error) {
        console.error("Error fetching token info:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTokenInfo();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="buy-token-page">
      <div className="token-header card">
        <div className="token-icon">🪙</div>
        <div className="token-main-info">
          <h2>{tokenInfo?.tokenName || "Dalarnia Token"}</h2>
          <div className="token-symbol">{tokenInfo?.symbol || "DAR"}</div>
        </div>
      </div>

      <div className="token-stats">
        <div className="stat-card card">
          <div className="stat-label">Current Price</div>
          <div className="stat-value">{tokenInfo?.currentPrice || "$0.15"}</div>
        </div>
        <div className="stat-card card">
          <div className="stat-label">Market Cap</div>
          <div className="stat-value">{tokenInfo?.marketCap || "$45M"}</div>
        </div>
      </div>

      <div className="exchanges-section">
        <h3>Where to Buy</h3>
        <p className="section-intro">Purchase {tokenInfo?.symbol || "DAR"} tokens on the following exchanges:</p>

        <div className="exchanges-grid">
          {tokenInfo?.exchanges?.map((exchange) => (
            <a key={exchange.name} href={exchange.url} target="_blank" rel="noopener noreferrer" className="exchange-card card">
              <div className="exchange-icon">🏦</div>
              <h4>{exchange.name}</h4>
              <span className="exchange-arrow">Visit Exchange →</span>
            </a>
          ))}
        </div>
      </div>

      <div className="info-section card">
        <h3>About {tokenInfo?.symbol || "DAR"} Token</h3>
        <p>
          The Dalarnia Token (DAR) is the native utility token of the Dalarnia Legends ecosystem. It can be used for purchasing
          in-game items, trading on the marketplace, and participating in governance decisions.
        </p>
        <div className="info-features">
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <span>In-game purchases and upgrades</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <span>Marketplace trading</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <span>Governance participation</span>
          </div>
          <div className="feature-item">
            <span className="feature-icon">✅</span>
            <span>Staking rewards</span>
          </div>
        </div>
      </div>

      <div className="disclaimer-section card">
        <h4>⚠️ Disclaimer</h4>
        <p>
          Cryptocurrency investments carry risk. Always do your own research and invest responsibly. This is not financial advice.
          The value of tokens can go up or down.
        </p>
      </div>
    </div>
  );
}
