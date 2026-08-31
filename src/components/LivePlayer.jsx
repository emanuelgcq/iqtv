import React, { useEffect, useRef, useState } from "react";
import Hls from "hls.js";

/**
 * Reproductor HLS para directo (m3u8).
 * - Safari/iOS: usa HLS nativo.
 * - Chrome/Edge/Firefox: usa hls.js.
 */
export default function LivePlayer({ src }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState("Cargando señal...");

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;

    let hls;

    // Safari / iOS (HLS nativo)
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
      setStatus("En vivo");
      return;
    }

    // Navegadores con MSE
    if (Hls.isSupported()) {
      hls = new Hls({
        lowLatencyMode: true,
        backBufferLength: 30,
      });

      hls.loadSource(src);
      hls.attachMedia(video);

      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        setStatus("En vivo");
      });

      hls.on(Hls.Events.ERROR, (_, data) => {
        // Manejo simple (escalable)
        if (data.fatal) {
          setStatus("Señal no disponible. Intenta recargar.");
          try {
            hls.destroy();
          } catch {}
        } else {
          setStatus("Ajustando señal...");
        }
      });

      return () => {
        try {
          hls.destroy();
        } catch {}
      };
    }

    setStatus("Tu navegador no soporta reproducción HLS.");
  }, [src]);

  return (
    <section className="player-wrap">
      <div className="player-topbar">
        <div className="live-pill">
          <span className="live-dot" />
          EN VIVO
        </div>
        <div className="player-status">{status}</div>
      </div>

      <div className="player-frame">
        <video
          ref={videoRef}
          controls
          playsInline
          autoPlay
          muted
          className="player-video"
        />
      </div>

      <div className="player-hint">
        Si no inicia, prueba recargar la página o verifica la URL del stream.
      </div>
    </section>
  );
}
