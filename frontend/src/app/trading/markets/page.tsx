'use client';

import { useEffect, useState } from "react";

import type { MarketItem } from "@/types";

type SortOption = "price" | "price-desc" | "rarity";

export default function MarketsPage() {
  const [items, setItems] = useState<MarketItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortOption>("price");

  useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/trading/markets");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching market items:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rarity") {
      const rarityOrder: Record<string, number> = { Common: 1, Rare: 2, Epic: 3, Legendary: 4 };
      return (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0);
    }
    return 0;
  });

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="markets-page">
      <div className="markets-header">
        <h2>Marketplace</h2>
        <div className="sort-controls">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(event) => setSortBy(event.target.value as SortOption)} className="sort-select">
            <option value="price">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rarity">Rarity</option>
          </select>
        </div>
      </div>

      <div className="market-items-grid">
        {sortedItems.map((item) => (
          <div key={item.id} className="market-item-card card">
            <div className="item-image-placeholder">
              <span className="item-icon">💎</span>
            </div>

            <div className="item-info">
              <div className="item-header">
                <h3>{item.name}</h3>
                <span className={`badge badge-${item.rarity.toLowerCase()}`}>{item.rarity}</span>
              </div>

              <div className="item-price">
                <span className="price-amount">{item.price}</span>
                <span className="price-currency">{item.currency}</span>
              </div>

              <div className="item-seller">
                Seller: <span>{item.seller}</span>
              </div>

              <button className="btn btn-primary btn-full">Buy Now</button>
            </div>
          </div>
        ))}
      </div>

      {sortedItems.length === 0 && (
        <div className="empty-state">
          <p>No items available on the market right now.</p>
        </div>
      )}
    </div>
  );
}
