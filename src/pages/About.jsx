import React from "react";

const lines = [
  "Hi.",
  "I'm Ludovico Cammarata, a Front-End Developer based in Italy.",
  "I study and work with web development every day, but I'm also passionate about back-end development like Node.js & Laravel.",
  "",
  "I mainly work with React, Laravel, and Node.js.",
  "I'm constantly learning and building real projects to improve my skills.",
  "",
  "You can find my projects on GitHub @CammarataLudovico.",
  "When I'm not coding, I train, design, and work on personal ideas.",
  "",
  "With the button below you can change the site theme. C'mon try it.",
  "༼ つ ◕_◕ ༽つ (very cool uh?)"
];

export default function About() {
  return (
    <div>
      <div id="title">
        <a href="/">&lt;</a> About
      </div>
      {lines.map((text, i) => (
        text === "" ? (
          <span key={i} className="empty-line" />
        ) : (
          <span key={i} className="line">{text}</span>
        )
      ))}

      <span className="empty-line" />
      <span className="status-line">
        <span>.quit</span>
        <span>03.02.2026        CammarataLudovico</span>
      </span>
    </div>
  );
}
