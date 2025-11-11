'use client';

import { useEffect, useState } from "react";

import type { Legend } from "@/types";

export default function BuilderPage() {
  const [availableLegends, setAvailableLegends] = useState<Legend[]>([]);
  const [selectedLegends, setSelectedLegends] = useState<Legend[]>([]);
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLegends = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/builder/available-legends");
        const data = await response.json();
        setAvailableLegends(data);
      } catch (error) {
        console.error("Error fetching legends:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLegends();
  }, []);

  const addLegend = (legend: Legend) => {
    if (selectedLegends.length >= 10) {
      alert("Maximum 10 legends per deck!");
      return;
    }
    if (selectedLegends.find((item) => item.id === legend.id)) {
      alert("Legend already in deck!");
      return;
    }
    setSelectedLegends((prev) => [...prev, legend]);
  };

  const removeLegend = (legendId: string) => {
    setSelectedLegends((prev) => prev.filter((legend) => legend.id !== legendId));
  };

  const handleSaveDeck = async () => {
    if (!deckName.trim()) {
      alert("Please enter a deck name!");
      return;
    }

    if (selectedLegends.length === 0) {
      alert("Please add at least one legend!");
      return;
    }

    try {
      const payload = {
        name: deckName,
        description: deckDescription,
        author: "Anonymous",
        legendIds: selectedLegends.map((legend) => legend.id),
      };

      const response = await fetch("/api/decks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to save deck");
      }

      alert("Deck saved successfully!");
      setDeckName("");
      setDeckDescription("");
      setSelectedLegends([]);
    } catch (error) {
      console.error("Error saving deck:", error);
      alert("Failed to save deck. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="builder-page">
      <div className="container">
        <h1 className="page-title">Deck Builder</h1>

        <div className="builder-layout">
          <div className="deck-info-section card">
            <h2>Deck Information</h2>
            <div className="form-group">
              <label>Deck Name *</label>
              <input
                type="text"
                value={deckName}
                onChange={(event) => setDeckName(event.target.value)}
                placeholder="Enter deck name..."
                className="input-field"
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                value={deckDescription}
                onChange={(event) => setDeckDescription(event.target.value)}
                placeholder="Describe your deck strategy..."
                className="textarea-field"
                rows={4}
              />
            </div>

            <div className="selected-legends-section">
              <h3>Selected Legends ({selectedLegends.length}/10)</h3>
              {selectedLegends.length === 0 ? (
                <p className="empty-text">No legends selected yet</p>
              ) : (
                <div className="selected-legends-list">
                  {selectedLegends.map((legend) => (
                    <div key={legend.id} className="selected-legend-item">
                      <span className="legend-name">{legend.name}</span>
                      <span className={`badge badge-${legend.rarity.toLowerCase()}`}>{legend.rarity}</span>
                      <button onClick={() => removeLegend(legend.id)} className="btn-remove" title="Remove">
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <button onClick={handleSaveDeck} className="btn btn-primary btn-full">
              Save Deck
            </button>
          </div>

          <div className="available-legends-section">
            <h2>Available Legends</h2>
            <div className="legends-list">
              {availableLegends.map((legend) => {
                const isAdded = selectedLegends.some((item) => item.id === legend.id);
                return (
                  <div key={legend.id} className={`legend-item card ${isAdded ? "disabled" : ""}`}>
                    <div className="legend-item-header">
                      <h4>{legend.name}</h4>
                      <span className={`badge badge-${legend.rarity.toLowerCase()}`}>{legend.rarity}</span>
                    </div>
                    <p className="legend-item-description">{legend.description}</p>
                    <div className="legend-item-stats">
                      <span>⚔️ {legend.stats.attack}</span>
                      <span>🛡️ {legend.stats.defense}</span>
                      <span>⚡ {legend.stats.speed}</span>
                    </div>
                    <button onClick={() => addLegend(legend)} className="btn-add" disabled={isAdded}>
                      {isAdded ? "Added" : "Add to Deck"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
