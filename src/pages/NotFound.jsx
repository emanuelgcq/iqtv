import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="page">
      <h2 className="page-title">Página no encontrada</h2>
      <p>La ruta que buscas no existe.</p>
      <Link className="btn" to="/">Volver al inicio</Link>
    </div>
  );
}
