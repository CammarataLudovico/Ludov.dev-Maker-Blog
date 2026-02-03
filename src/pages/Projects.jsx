import React from "react";
{/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons' */}

const projects = [
  {
    title: "CaorleFilmSnap",
    desc: "This project was created to upload and manage photos of participants of the Caorle Film Festival 2025",
    link: "https://github.com/CammarataLudovico/CaorleFilmSnap"
  },
  {
    title: "Http-Bodybuilding",
    desc: "A fun and educational React app where bodybuilders represent HTTP status codes. Inspired by http.cat, built with Vite + Tailwind. 💪🌐",
    link: "https://github.com/CammarataLudovico/http-bodybuilder"
  },
  {
    title: "Frot 2024-2026 Website",
    desc: "Public site for Front-End_2024-2026 course at ITS ALTO ADRIATICO",
    link: "https://github.com/CammarataLudovico/Front-End_2024-2026"
  }
];

export default function Projects() {
  return (
    <div>
      <div id="title"><a href="/">&lt;</a> Projects</div>

      <main>
        <div className="portfolio-grid">
          {projects.map((p, i) => (
            <article key={i} className="card">
              <h2>{p.title}</h2>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer">View on GitHub</a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
