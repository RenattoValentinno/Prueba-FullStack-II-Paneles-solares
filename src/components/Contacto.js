import React, { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  const limpiar = () => {
    setNombre("");
    setCorreo("");
    setMensaje("");
  };

  const enviar = () => {
    alert("📩 Gracias por tu mensaje. Te contactaremos pronto.");
    limpiar();
  };

  return (
    <section id="contacto" className="py-5" style={{ backgroundColor: "#f8fbfc" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Contacto</h2>
        <p className="text-muted mb-5">
          Cuéntanos tu proyecto y agenda una asesoría.
        </p>

        <div className="mx-auto" style={{ maxWidth: "600px" }}>
          <div className="mb-3 text-start">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              placeholder="tucorreo@dominio.com"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
            />
          </div>

          <div className="mb-3 text-start">
            <label className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Describe brevemente tu necesidad"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
            ></textarea>
          </div>

          <div className="d-flex justify-content-center gap-2">
            <button className="btn btn-success rounded-pill px-4" onClick={enviar}>
              Enviar
            </button>
            <button className="btn btn-outline-secondary rounded-pill px-4" onClick={limpiar}>
              Limpiar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;