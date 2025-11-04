import React from "react";

function Testimonios() {
  const clientes = [
    {
      nombre: "Alejandra, Ñuñoa",
      texto: "Instalación rápida y ahorro visible en la primera boleta.",
    },
    {
      nombre: "Diego, Valdivia",
      texto: "El monitoreo me permite proyectar bien los consumos.",
    },
    {
      nombre: "Carla, Copiapó",
      texto: "Excelente asesoría y postventa. 100% recomendado.",
    },
  ];

  return (
    <section id="testimonios" className="py-5" style={{ backgroundColor: "#f8fbfc" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Testimonios</h2>
        <p className="text-muted mb-5">Clientes que confían en HelioAndes</p>
        <div className="row g-4">
          {clientes.map((c, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                <i className="bi bi-chat-quote text-success fs-3 mb-3"></i>
                <p className="text-muted small mb-3">“{c.texto}”</p>
                <h6 className="fw-semibold text-dark">{c.nombre}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;