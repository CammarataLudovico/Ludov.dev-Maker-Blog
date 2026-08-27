import React from "react";
import profile from "../assets/img/squadra12.JPG";

const lines = [
"Hi.",
"I'm Ludovico Cammarata, a Software Developer based in Italy.",
"My background is mainly in web development, working with React, TypeScript, Laravel, PHP, and Node.js.",
"",
"I enjoy working across the stack, from building interfaces and APIs to databases, deployments, and the infrastructure behind my projects.",
"I'm currently expanding my knowledge of Docker, Linux, networking, and Kubernetes.",
"",
"I run my own VPS where I host projects, manage deployments, and experiment with new technologies and infrastructure.",
"",
"Outside of software, I'm into 3D printing, CAD, IoT, and building things in general.",
"",
"You can find my projects on GitHub @CammarataLudovico.",
"When I'm not coding, I'm usually training, designing something, or working on another personal project.",
"",
"And yes, you can change the site theme with the button below.",
"C'mon, try it.",
"༼ つ ◕_◕ ༽つ"
];

export default function About() {
  return (
    <main>
      <h1 id="title">
        <a href="/" aria-label="Back to home">&lt;</a> ~/about
      </h1>
      <div>
        <img className="profile-img" src={profile} alt="Ludovico Cammarata" />
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
        <span>12.03.2026        CammarataLudovico</span>
      </span>
    </main>
  );
}
