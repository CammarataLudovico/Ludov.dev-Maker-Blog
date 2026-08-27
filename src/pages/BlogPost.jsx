import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <div>
        <div id="title"><a href="/blog" aria-label="Back to blog">&lt;</a> Post not found</div>
        <main>
          <p>Post not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <h1 id="title"><Link to="/blog" aria-label="Back to blog">&lt;</Link> {post.title}</h1>
      <main>
        <article className="card">
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <div style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>{post.content}</div>
          <div>
            {post.certificateUrl && (
              <a
                href={post.certificateUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Certificate
              </a>
            )}
          </div>
        </article>
      </main>
    </div>
  );
}
