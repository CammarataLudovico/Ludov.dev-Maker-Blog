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
      <div id="title">Ludov.dev Maker Blog</div>

      <main>
        <b>Section:</b>
        <span className="link">├── <a href="#" target="_blank" rel="noreferrer" data-type="dir">site_source/</a></span>
        <span className="link">├── <a href="https://github.com/CammarataLudovico" target="_blank" rel="noreferrer" data-type="dir">github/</a></span>
        <span className="link">├── <a href="/about" data-type="file">about.dev</a></span>
        <span className="link">├── <a href="/skills" data-type="file">skills.dev</a></span>
        {/* <span className="link">├── <a href="/projects" data-type="file">projects.dev</a></span> */}
        <span className="link">├── <a href="/projects" data-type="file">portfolio.dev</a></span>
        <span className="link">├── <a href="/blog" data-type="file">blog.dev</a></span>
        <span className="link">├── <a href="/skills" data-type="file">skills.dev</a></span>
        <span className="link">└── <a href="/contacts" data-type="file">contacts.dev</a></span>
        <br />
        <span>{counts.files} files, {counts.dirs} directories</span>
      </main>
    </div>
  );
}
