import React from "react";
import { useParams, Link } from "react-router-dom";
import posts from "../data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => String(p.id) === id);

  if (!post) {
    return (
      <div>
        <div id="title"><a href="/blog">&lt;</a> Post not found</div>
        <main>
          <p>Post not found.</p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <div id="title"><Link to="/blog">&lt;</Link> {post.title}</div>
      <main>
        <article className="card">
          <h2>{post.title}</h2>
          <small>{post.date}</small>
          <div style={{ whiteSpace: "pre-wrap", marginTop: "1rem" }}>{post.content}</div>
        </article>
      </main>
    </div>
  );
}
