import React from "react";
import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PaletteButton from "./components/PaletteButton";

export default function App() {
  return (
    <div>
      <Nav />
      <main>
        <Outlet />
        <PaletteButton />
      </main>
    </div>
  );
}
