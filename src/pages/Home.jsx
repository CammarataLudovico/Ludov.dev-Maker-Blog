import React, { useEffect, useState } from "react";

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
      <div id="title">Ludovico Cammarata — Junior Software Developer</div>

      <main>
        
        <span className="about"> 
          <p> Ludovico Cammarata </p>
          <p> Software Developer based in Italy. </p>
          <p> I build web applications and experiment with infrastructure, Linux and containers. </p>
        </span>

        <b>Section:</b>
        <span className="link">├── <a href="https://github.com/CammarataLudovico/Ludov.dev-Maker-Blog" target="_blank" rel="noreferrer" data-type="dir">site_source/</a></span>
        <span className="link">├── <a href="https://github.com/CammarataLudovico" target="_blank" rel="noreferrer" data-type="dir">github/</a></span>
        <span className="link">├── <a href="/about" data-type="file">about.dev</a></span>
        <span className="link">├── <a href="/projects" data-type="file">projects.dev</a></span>
        <span className="link">├── <a href="/blog" data-type="file">blog.dev</a></span>
        <span className="link">├── <a href="/skills" data-type="file">skills.dev</a></span>
        {/* <span className="link">└── <a href="/contacts" data-type="file">contacts.dev</a></span> ! Need to be implemented ! */}
        <br /> 
        <span>{counts.files} files, {counts.dirs} directories</span>
      </main>
    </div>
  );
}
