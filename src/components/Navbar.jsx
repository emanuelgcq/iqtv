import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand" aria-label="Ir al inicio">
          <img className="hero-logo" src="/media/logo.jpeg" alt="IQTV Logo" />
          <div className="brand-text">
            <div className="brand-name">IQTV</div>
            <div className="brand-sub">Image Quality TV</div>
          </div>
        </NavLink>

        <nav className="nav-links">
          <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
            Inicio
          </NavLink>
          <NavLink to="/sobre-nosotros" className={({ isActive }) => (isActive ? "active" : "")}>
            Sobre nosotros
          </NavLink>
          <NavLink to="/contacto" className={({ isActive }) => (isActive ? "active" : "")}>
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
