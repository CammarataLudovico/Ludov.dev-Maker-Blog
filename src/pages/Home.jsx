import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function countDirFile() {
  if (typeof document === "undefined") return { dirs: 0, files: 0 };
  const dirs = document.querySelectorAll("[data-type=dir]").length;
  const files = document.querySelectorAll("[data-type=file]").length;
  return { dirs, files };
}

export default function Home() {
  const [counts, setCounts] = useState({ dirs: 0, files: 0 });

  useEffect(() => {
    
    setCounts(countDirFile());
  }, []);

  return (
    <div>
      <main>
      <h1 id="title"> &lt; Ludovico Cammarata — Junior Software Developer </h1>
        
        <section className="about">
          <p> Ludovico Cammarata </p>
          <p> Software Developer based in Italy. </p>
          <p> I build web applications and experiment with infrastructure, Linux and containers. </p>
        </section>


        <p className="terminal-path">
          ~/portfolio<br />
          $ ls
        </p>

        <nav aria-label="Portfolio sections">
          <ul className="file-list">
            <li>├── <a href="https://github.com/CammarataLudovico/Ludov.dev-Maker-Blog" data-type="dir" rel="noopener noreferrer" target="_blank">site_source</a></li>
            <li>├── <a href="https://github.com/CammarataLudovico" data-type="dir" rel="noopener noreferrer" target="_blank">github</a></li>
            <li>├── <Link to="/about" data-type="file">about.dev</Link></li>
            <li>├── <Link to="/projects" data-type="file">projects.dev</Link></li>
            <li>├── <Link to="/blog" data-type="file">blog.dev</Link></li>
            <li>├── <Link to="/skills" data-type="file">skills.dev</Link></li>
          </ul>
        </nav>

        <br /> 
        <span>{counts.files} files, {counts.dirs} directories</span>
      </main>
    </div>
  );
}
