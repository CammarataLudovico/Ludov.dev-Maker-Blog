import React from "react";
import { Link } from "react-router-dom";
import posts from "../data/posts";
import Markdown from "markdown-to-jsx";

export default function Blog() {
  return (
    <div>
      <div id="title"><a href="/">&lt;</a> Blog</div>

      <main>
        <div className="portfolio-grid">
          {posts.map((p) => (
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
