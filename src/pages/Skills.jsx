import React from "react";
import Markdown from 'markdown-to-jsx/react'

export default function Skills() {
  return (
    <section>
      <div id="title"><a href="/">&lt;</a> Skills</div>
      <Markdown children="## 👋 Hi!

### Ludovico Cammarata

- 🔞 I'm currently 22 years old.
- 👀 I’m a Front-End Developer Student.
- 🌱 I’m currently learning PHP & Laravel.

### Competitions
- 🥉 3st place - National Cybersecurity Championship - [ITSCYBERGAME](https://www.itsaltoadriatico.it/grande-successo-per-lits-academy-alto-adriatico-agli-its-cyber-game-di-verona-2025/)

### Programming languages / Technologies

- 🌐 Web
  - Javascript & React
  - PHP, Laravel
  - Typescript
  - Shopify Dev (Preact, Polaris UI)
- 🖥 Back End
  - Node.js
  - Express
  - pm2
- ⛃ Database
  - MySql
  - Sqlite3
  - GraphQL
- IoT
  - Grafana
  - Prometheus
- Visual Basic
  - Windows Form, WPF
- Java
- Python
- Docker


### Other
- ⚙ CAD - Fusion 360

Certifications:

-[Sql intermediate](https://www.hackerrank.com/certificates/iframe/e83f2fde3d60)

-[Css Basic](https://www.hackerrank.com/certificates/iframe/e83f2fde3d60)" />
  <span className="empty-line" />
      <span className="status-line">
        <span>.quit</span>
        <span>03.02.2026        CammarataLudovico</span>
      </span>
    </section>
  );
}
