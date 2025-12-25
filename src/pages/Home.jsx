import React from "react";
import YoutubeLive from "../components/YoutubeLive";

export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <img className="hero-logo" src="/media/logo.jpeg" alt="IQTV Logo" />
        <h1 className="hero-title">Image Quality TV</h1>
        <p className="hero-tagline">Creando Contenidos para Ti…</p>
      </section>

      <YouTubeLive />
    </div>
  );
}