import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";
const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

export default function Blog() {
  return (
    <div>
      <div id="title"><a href="/">&lt;</a> Blog</div>

      <main>
        <div className="portfolio-grid">
          {sortedPosts.map((p) => (
            <article key={p.id} className="card">
              <h3>{p.title}</h3>
              <small>{p.date}</small>
              <p>{p.summary}</p>
              <Link to={`/blog/${p.id}`}>Read more</Link>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
