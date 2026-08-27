import React from "react";
import Markdown from 'markdown-to-jsx/react'

export default function Skills() {
  return (
    <section>
      <div id="title"><a href="/">&lt;</a> Skills</div>
      <Markdown>{`

# 👋 Hi, I'm Ludovico Cammarata

I'm a **Software Developer** from Italy with a background in Front-End Development and hands-on experience building full-stack web applications.

I enjoy working across the stack, from user interfaces to backend services, APIs, databases and deployment.

Currently expanding my knowledge of **Docker, Linux, networking and Kubernetes**, while exploring the infrastructure, cloud and cybersecurity side of software development.

## 🏆 Competitions

* 🥉 **3rd Place — National Cybersecurity Championship (ITS Cyber Game 2025)**
  [ITS Academy Alto Adriatico](https://www.itsaltoadriatico.it/grande-successo-per-lits-academy-alto-adriatico-agli-its-cyber-game-di-verona-2025/)

## 🛠 Tech Stack

### 🌐 Frontend

* JavaScript
* TypeScript
* React
* Tailwind CSS
* Material UI
* Shopify Development

  * Preact
  * Polaris

### ⚙️ Backend

* PHP
* Laravel
* Node.js
* Express
* REST APIs
* GraphQL

### 🗄️ Databases

* MySQL
* SQLite

### 🐳 Infrastructure & Tools

* Docker
* Linux
* Git
* Nginx
* Traefik
* PM2

### 📊 Monitoring

* Grafana
* Prometheus

### 💻 Other Languages & Technologies

* Python
* Java
* Visual Basic

  * Windows Forms
  * WPF

### 🛠 CAD & Making

* Fusion 360
* 3D Printing

## 📚 Currently Learning

* Docker & containerization
* Kubernetes
* Linux & networking
* Cloud infrastructure

## 🎓 Certifications

* [SQL Intermediate — HackerRank](https://www.hackerrank.com/certificates/iframe/e83f2fde3d60)
* [CSS Basic — HackerRank](https://www.hackerrank.com/certificates/iframe/cc9f893fa426)

## 🔗 Find me online

* 🌐 [ludov.dev](https://ludov.dev)
* 💼 [LinkedIn](https://www.linkedin.com/in/ludovico-cammarata-8a2951300/)
`}</Markdown>
      <span className="empty-line" />
      <span className="status-line">
        <span>.quit</span>
        <span>27.08.2026        CammarataLudovico</span>
      </span>
    </section>
  );
}
