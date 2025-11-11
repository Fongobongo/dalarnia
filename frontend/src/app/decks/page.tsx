'use client';

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

import type { Deck } from "@/types";

type SortKey = "likes" | "views" | "date";

export default function DecksPage() {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState<SortKey>("likes");

  useEffect(() => {
    const fetchDecks = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/decks");
        const data = await response.json();
        setDecks(data);
      } catch (error) {
        console.error("Error fetching decks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDecks();
  }, []);

  const sortedDecks = useMemo(() => {
    return [...decks].sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "views") return b.views - a.views;
      if (sortBy === "date") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      return 0;
    });
  }, [decks, sortBy]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="decks-page">
      <div className="container">
        <div className="page-header">
          <h1 className="page-title">Community Decks</h1>
          <Link href="/builder" className="btn btn-primary">
            Create Deck
          </Link>
        </div>

        <div className="sort-section">
          <label>Sort by:</label>
          <div className="sort-buttons">
            {(["likes", "views", "date"] as SortKey[]).map((key) => (
              <button key={key} className={`sort-btn ${sortBy === key ? "active" : ""}`} onClick={() => setSortBy(key)}>
                {key === "likes" && "Most Liked"}
                {key === "views" && "Most Viewed"}
                {key === "date" && "Newest"}
              </button>
            ))}
          </div>
        </div>

        <div className="decks-grid">
          {sortedDecks.map((deck) => (
            <div key={deck.id} className="deck-card card">
              <div className="deck-header">
                <h3>{deck.name}</h3>
                <div className="deck-stats-mini">
                  <span title="Likes">❤️ {deck.likes}</span>
                  <span title="Views">👁️ {deck.views}</span>
                </div>
              </div>

              <p className="deck-description">{deck.description}</p>

              <div className="deck-info">
                <div className="deck-legends-count">
                  <span className="legend-icon">🎴</span>
                  <span>{deck.legends.length} Legends</span>
                </div>
                <span className="deck-author">by {deck.author}</span>
              </div>

              <div className="deck-date">{new Date(deck.createdAt).toLocaleDateString()}</div>

              <div className="deck-actions">
                <button className="btn-deck-action">View Deck</button>
                <button className="btn-deck-action">Copy</button>
              </div>
            </div>
          ))}
        </div>

        {sortedDecks.length === 0 && (
          <div className="empty-state">
            <p>No decks found. Be the first to create one!</p>
            <Link href="/builder" className="btn btn-primary">
              Create First Deck
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
