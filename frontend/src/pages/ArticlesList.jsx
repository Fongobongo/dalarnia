import { useState, useEffect } from 'react'
import axios from 'axios'
import './ArticlesList.css'

function ArticlesList({ category }) {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true)
      try {
        const endpoint = category === 'all' 
          ? '/api/articles/all' 
          : `/api/articles/${category}`
        const response = await axios.get(endpoint)
        setArticles(response.data)
      } catch (error) {
        console.error('Error fetching articles:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArticles()
  }, [category])

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    )
  }

  const getCategoryBadge = (cat) => {
    const badges = {
      news: 'badge-legendary',
      patch_notes: 'badge-epic',
      announcements: 'badge-rare',
      guides: 'badge-common',
      events: 'badge-legendary',
      faq: 'badge-common'
    }
    return badges[cat] || 'badge-common'
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
                <span className={`badge ${getCategoryBadge(article.category)}`}>
                  {article.category.replace('_', ' ')}
                </span>
                <span className="article-date">
                  {new Date(article.created_at).toLocaleDateString()}
                </span>
              </div>
              
              <h3 className="article-title">{article.title}</h3>
              
              <p className="article-excerpt">{article.content.substring(0, 150)}...</p>
              
              <div className="article-footer">
                <span className="article-author">By {article.author}</span>
                <button className="btn-read-more">Read More →</button>
              </div>

              {article.tags && article.tags.length > 0 && (
                <div className="article-tags">
                  {article.tags.map((tag, index) => (
                    <span key={index} className="tag">#{tag}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </div>
  )
}

export default ArticlesList

