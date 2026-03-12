import React from "react";
import { NavLink } from "react-router-dom";

export default function Nav() {
  const active = ({ isActive }) => (isActive ? "active" : "");
  return (
    <header>
      <nav>
        <NavLink to="/" className={active} end>
          Home
        </NavLink>
        <NavLink to="/about" className={active}>
          About
        </NavLink>
        {/* <NavLink to="/projects" className={active}>
          Projects
        </NavLink> */}
        <NavLink to="/projects" className={active}>
          Projects
        </NavLink>
        <NavLink to="/blog" className={active}>
          Blog
        </NavLink>
        <NavLink to="/skills" className={active}>
          Skills
        </NavLink>
        {/* <NavLink to="/contacts" className={active}>
          Contacts
        </NavLink> */}
      </nav>
    </header>
  );
}
