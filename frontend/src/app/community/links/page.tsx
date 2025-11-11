'use client';

import { useEffect, useState } from "react";

type LinkGroup = {
  official: { name: string; url: string }[];
  community: { name: string; url: string }[];
};

export default function CommunityLinksPage() {
  const [links, setLinks] = useState<LinkGroup>({ official: [], community: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLinks = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/community/links");
        const data = await response.json();
        setLinks(data);
      } catch (error) {
        console.error("Error fetching links:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLinks();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  const sections = [
    { title: "🏛️ Official Links", items: links.official },
    { title: "👥 Community Links", items: links.community },
  ];

  return (
    <div className="links-page">
      <h2>Community Links</h2>
      <p className="links-intro">Connect with the Dalarnia Legends community across various platforms</p>

      <div className="links-sections">
        {sections.map((section) => (
          <div key={section.title} className="links-section card">
            <h3>{section.title}</h3>
            <div className="links-list">
              {section.items.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="link-item">
                  <span className="link-name">{link.name}</span>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
