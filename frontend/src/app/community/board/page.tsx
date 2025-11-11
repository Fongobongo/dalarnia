'use client';

import { useEffect, useState } from "react";

import type { CommunityPost } from "@/types";

export default function BoardPage() {
  const [posts, setPosts] = useState<CommunityPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/community/board");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="board-page">
      <div className="board-header">
        <h2>Discussion Board</h2>
        <button className="btn btn-primary">New Post</button>
      </div>

      <div className="posts-list">
        {posts.map((post) => (
          <div key={post.id} className="post-card card">
            <div className="post-header">
              <h3>{post.title}</h3>
              <div className="post-stats">
                <span title="Replies">💬 {post.replies}</span>
                <span title="Likes">❤️ {post.likes}</span>
              </div>
            </div>

            <p className="post-content">{post.content}</p>

            <div className="post-footer">
              <span className="post-author">Posted by {post.author}</span>
              <span className="post-date">{new Date(post.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="empty-state">
          <p>No posts yet. Start the conversation!</p>
          <button className="btn btn-primary">Create First Post</button>
        </div>
      )}
    </div>
  );
}
