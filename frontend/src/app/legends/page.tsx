'use client';

import { useEffect, useState } from "react";

import type { Legend } from "@/types";

const rarityClass: Record<string, string> = {
  legendary: "rarity-legendary",
  epic: "rarity-epic",
  rare: "rarity-rare",
  common: "rarity-common",
};

export default function LegendsPage() {
  const [legends, setLegends] = useState<Legend[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRarity, setSelectedRarity] = useState("all");

  useEffect(() => {
    const fetchLegends = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/legends");
        const data = await response.json();
        setLegends(data);
      } catch (error) {
        console.error("Error fetching legends:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLegends();
  }, []);

  const filteredLegends =
    selectedRarity === "all" ? legends : legends.filter((legend) => legend.rarity.toLowerCase() === selectedRarity);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="legends-page">
      <div className="container">
        <h1 className="page-title">Legends Database</h1>

        <div className="filter-section">
          <label>Filter by Rarity:</label>
          <div className="filter-buttons">
            {["all", "legendary", "epic", "rare", "common"].map((rarity) => (
              <button
                key={rarity}
                className={`filter-btn ${selectedRarity === rarity ? "active" : ""}`}
                onClick={() => setSelectedRarity(rarity)}
              >
                {rarity === "all" ? "All" : rarity.charAt(0).toUpperCase() + rarity.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="legends-grid">
          {filteredLegends.map((legend) => (
            <div key={legend.id} className={`legend-card card ${rarityClass[legend.rarity.toLowerCase()]}`}>
              <div className="legend-image-placeholder">
                <span className="legend-icon">⚔️</span>
              </div>

              <div className="legend-info">
                <div className="legend-header">
                  <h3>{legend.name}</h3>
                  <span className={`badge badge-${legend.rarity.toLowerCase()}`}>{legend.rarity}</span>
                </div>

                <p className="legend-description">{legend.description}</p>

                <div className="legend-stats">
                  {["attack", "defense", "speed"].map((stat) => (
                    <div className="stat" key={stat}>
                      <span className="stat-label">{stat.charAt(0).toUpperCase() + stat.slice(1)}</span>
                      <span className="stat-value">{legend.stats[stat as keyof typeof legend.stats]}</span>
                      <div className="stat-bar">
                        <div
                          className={`stat-fill ${stat}`}
                          style={{ width: `${legend.stats[stat as keyof typeof legend.stats]}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="legend-abilities">
                  <h4>Abilities:</h4>
                  <ul>
                    {legend.abilities.map((ability) => (
                      <li key={ability}>{ability}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
