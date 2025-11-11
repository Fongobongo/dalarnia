'use client';

import Link from "next/link";
import { motion } from "framer-motion";

const features = [
  {
    title: "Articles & News",
    description: "Stay updated with the latest news, patch notes, and guides",
    icon: "📰",
    link: "/articles/all",
  },
  {
    title: "Legend Database",
    description: "Browse all legends with detailed stats and abilities",
    icon: "⚔️",
    link: "/legends",
  },
  {
    title: "Deck Builder",
    description: "Create and share your custom decks with the community",
    icon: "🎴",
    link: "/builder",
  },
  {
    title: "Community Hub",
    description: "Connect with other players and share strategies",
    icon: "👥",
    link: "/community/board",
  },
  {
    title: "Trading Markets",
    description: "Buy and sell legends and items on the marketplace",
    icon: "💰",
    link: "/trading/markets",
  },
  {
    title: "Top Decks",
    description: "Discover the most popular and effective deck builds",
    icon: "🏆",
    link: "/decks",
  },
];

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="container">
          <motion.div
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Welcome to <span className="text-gradient">DALARNIA LEGENDS</span>
            </h1>
            <p className="hero-subtitle">
              Your ultimate fan-made resource for Dalarnia Legends - guides, decks, legends database, and community hub
            </p>
            <div className="hero-actions">
              <Link href="/articles/all" className="btn btn-primary">
                Latest News
              </Link>
              <Link href="/legends" className="btn">
                Browse Legends
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="hero-decoration">
          <div className="planet planet-1"></div>
          <div className="planet planet-2"></div>
          <div className="stars"></div>
        </div>
      </section>

      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Explore the Universe</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <Link href={feature.link} className="feature-link">
                  Explore →
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Journey?</h2>
            <p>Join the community and become a legend!</p>
            <div className="cta-actions">
              <a href="https://legends.dalarnia.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Play Now
              </a>
              <Link href="/community/board" className="btn">
                Join Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
