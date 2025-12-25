import React from "react";

const CHANNEL_ID = "UCrW3oRAraUQZDneRdMWwf7g";

export default function YouTubeLive() {
  const src = `https://www.youtube.com/embed/live_stream?channel=${CHANNEL_ID}&autoplay=1&mute=1&playsinline=1&rel=0`;

  return (
    <div style={{ width: "100%", aspectRatio: "16/9" }}>
      <iframe
        src={src}
        title="IQTV Live"
        style={{ width: "100%", height: "100%", border: 0 }}
        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
