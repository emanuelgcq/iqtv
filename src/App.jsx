import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© {new Date().getFullYear()} IQTV — Image Quality TV</span>
          <span className="dot">•</span>
          <span>Barquisimeto, Estado Lara</span>
        </div>
      </footer>
    </div>
  );
}
