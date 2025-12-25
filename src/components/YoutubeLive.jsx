import React from "react";

export default function YoutubeLive({ videoId, channelId }) {
  // Opción A (recomendada): videoId del live actual
  // Opción B: channelId UC... (solo si tienes el UCxxxx real)

  const src = videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&playsinline=1&rel=0`
    : `https://www.youtube.com/embed/live_stream?channel=${channelId}&autoplay=1&mute=0&playsinline=1&rel=0`;

  return (
    <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto" }}>
      <div style={{ position: "relative", paddingTop: "56.25%" }}>
        <iframe
          src={src}
          title="IQTV En Vivo"
          allow="autoplay; encrypted-media; fullscreen"
          allowFullScreen
          frameBorder="0"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            borderRadius: 16,
          }}
        />
      </div>
    </div>
  );
}