import React from "react";

export default function About() {
  return (
    <div className="page">
      <h2 className="page-title">Sobre Nosotros</h2>

      <div className="card">
        <p>
          <strong>IQTV (Image Quality TV)</strong> es una TV de{" "}
          <strong>Barquisimeto, Estado Lara</strong>, creada para llevarte contenido
          con calidad, cercanía y buen ritmo.
        </p>

        <p>
          La conducción está a cargo de <strong>Ibrahim Querales</strong>, con un
          enfoque dinámico, informativo y entretenido.
        </p>

        <hr className="hr" />

        <h3 className="section-title">Renglón</h3>
        <ul className="list">
          <li><strong>Deportes:</strong> cobertura, análisis, entrevistas y noticias.</li>
          <li><strong>Turismo:</strong> rutas, lugares, experiencias y recomendaciones.</li>
          <li><strong>Recreación:</strong> eventos, cultura, entretenimiento y comunidad.</li>
        </ul>

        <div className="note">
          <strong>Eslogan:</strong> “Creando Contenidos para Ti…”
        </div>
      </div>
    </div>
  );
}
