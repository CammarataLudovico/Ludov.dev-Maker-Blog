import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Skills from "./pages/Skills";
import Contacts from "./pages/Contacts";
import "./assets/style.css";
import "./assets/pages/about.css";
import "./assets/pages/contacts.css";
import "./assets/pages/projects.css";
import "./assets/pages/skills.css";
import "./assets/pages/blog.css";
import "./assets/theme.js";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "about", element: <About /> },
        { path: "projects", element: <Projects /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/:id", element: <BlogPost /> },
        { path: "skills", element: <Skills /> },
        { path: "contacts", element: <Contacts /> },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    },
  }
);

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
