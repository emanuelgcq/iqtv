import React from "react";
import YoutubeLive from "../components/YoutubeLive";

export default function Home() {
  // Forma manual más simple:
  // 1) Abres tu live en YouTube
  // 2) Copias el link: https://www.youtube.com/watch?v=XXXXXXXXXXX
  // 3) Pegas solo el ID aquí:
  const LIVE_VIDEO_ID = "dSPw5mMkjCc";

  // Si luego consigues el Channel ID UC..., puedes usar esto:
  // const CHANNEL_ID = "UCxxxxxxxxxxxxxxxx";

  return (
    
    <div className="page">
      <section className="hero">
        <img className="hero-logo" src="/media/logo.jpeg" alt="IQTV Logo" />
        <h1 className="hero-title">Image Quality TV</h1>
        <p className="hero-tagline">Creando Contenidos para Ti…</p>
      </section>

      <YoutubeLive videoId={LIVE_VIDEO_ID} />
      {/* O con channelId real UC...:
          <YoutubeLive channelId={CHANNEL_ID} />
      */}
    </div>
  );
}