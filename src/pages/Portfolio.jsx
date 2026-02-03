import React from "react";

const projects = [
  {
    title: "",
    desc: "",
    link: ""
  },
  {
    title: "",
    desc: "",
    link: ""
  },
  {
    title: "",
    desc: "",
    link: ""
  }
];

export default function Portfolio() {
  return (
    <div>
      <div id="title"><a href="/">&lt;</a> Portfolio</div>

      <main>
        <div className="portfolio-grid">
          <h3>Currently under construction!</h3>
          {/* {projects.map((p, i) => (
            <article key={i} className="card">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </article>
          ))}*/}
        </div>
      </main>
    </div>
  );
}
