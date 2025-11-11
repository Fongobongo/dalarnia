'use client';

import { useEffect, useState } from "react";

import type { Article, ArticleCategory } from "@/types";

const badges: Record<string, string> = {
  news: "badge-legendary",
  patch_notes: "badge-epic",
  announcements: "badge-rare",
  guides: "badge-common",
  events: "badge-legendary",
  faq: "badge-common",
};

type ArticlesListProps = {
  category: ArticleCategory;
};

export function ArticlesList({ category }: ArticlesListProps) {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/articles/${category}`);
        const data = await response.json();
        setArticles(data);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="articles-list">
      {articles.length === 0 ? (
        <div className="empty-state">
          <p>No articles found in this category yet.</p>
        </div>
      ) : (
        <div className="articles-grid">
          {articles.map((article) => (
            <article key={article.id} className="article-card card">
              <div className="article-header">
                <span className={`badge ${badges[article.category] || "badge-common"}`}>
                  {article.category.replace("_", " ")}
                </span>
                <span className="article-date">{new Date(article.createdAt).toLocaleDateString()}</span>
              </div>

              <h3 className="article-title">{article.title}</h3>

              <p className="article-excerpt">{article.content.substring(0, 150)}...</p>

              <div className="article-footer">
                <span className="article-author">By {article.author}</span>
                <button className="btn-read-more">Read More →</button>
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="article-tags">
                  {article.tags.map((tag) => (
                    <span key={tag} className="tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
