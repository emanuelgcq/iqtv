import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  function onChange(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    // Aquí lo conectas a:
    // - Email (SendGrid/Mailgun)
    // - WhatsApp link
    // - API / CRM
    setSent(true);
  }

  return (
    <div className="page">
      <h2 className="page-title">Contacto</h2>

      <div className="grid-2">
        <div className="card">
          <h3 className="section-title">Escríbenos</h3>
          <p>
            Para alianzas, prensa o propuestas de contenido, contáctanos y te
            respondemos lo antes posible.
          </p>

          <div className="contact-block">
            <div><strong>Ubicación:</strong> Barquisimeto, Edo. Lara</div>
            <div><strong>Marca:</strong> IQTV — Image Quality TV</div>
            <div><strong>Conduce:</strong> Ibrahim Querales</div>
          </div>

          <div className="note">
            CREANDO CONTENIDOS PARA TI
          </div>
        </div>

        <div className="card">
          <h3 className="section-title">Formulario</h3>

          {sent ? (
            <div className="success">
              ¡Listo! Mensaje preparado. (Conectamos el envío real cuando quieras.)
            </div>
          ) : (
            <form onSubmit={onSubmit} className="form">
              <label className="label">
                Nombre
                <input
                  className="input"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Tu nombre"
                  required
                />
              </label>

              <label className="label">
                Email
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="tu@email.com"
                  required
                />
              </label>

              <label className="label">
                Mensaje
                <textarea
                  className="textarea"
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  placeholder="Cuéntanos en qué te ayudamos..."
                  rows={5}
                  required
                />
              </label>

              <button className="btn" type="submit">
                Enviar
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
