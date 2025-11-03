import React from "react";

function Servicios() {
  const servicios = [
    {
      icon: "bi-lightbulb",
      titulo: "Estudio energético",
      texto: "Análisis de consumo y propuesta ajustada a tu perfil.",
    },
    {
      icon: "bi-tools",
      titulo: "Instalación certificada",
      texto: "Ejecutada por personal acreditado y normativa vigente.",
    },
    {
      icon: "bi-bar-chart",
      titulo: "Monitoreo",
      texto: "Seguimiento de rendimiento y alertas preventivas.",
    },
    {
      icon: "bi-gear",
      titulo: "Mantenimiento",
      texto: "Planes periódicos para extender la vida útil del sistema.",
    },
  ];

  return (
    <section id="servicios" className="py-5" style={{ backgroundColor: "#f8fbfc" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Servicios</h2>
        <div className="row g-4">
          {servicios.map((s, i) => (
            <div key={i} className="col-12 col-md-6 col-lg-3">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                <i
                  className={`bi ${s.icon} text-success fs-2 mb-3`}
                ></i>
                <h5 className="fw-semibold">{s.titulo}</h5>
                <p className="text-muted small">{s.texto}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Servicios;