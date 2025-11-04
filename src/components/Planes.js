import React from "react";

function Planes() {
  const planes = [
    {
      tipo: "Básico",
      rango: "3–5 kW",
      detalles: ["Estudio energético", "Instalación estándar", "Monitoreo básico"],
    },
    {
      tipo: "Optimizado",
      rango: "10–15 kW",
      detalles: ["Estudio avanzado", "Instalación optimizada", "Monitoreo avanzado"],
    },
    {
      tipo: "Autónomo",
      rango: "Híbrido + baterías",
      detalles: ["Diseño off-grid", "Almacenamiento", "Soporte preferente"],
    },
  ];

  return (
    <section id="planes" className="py-5 bg-white">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Planes</h2>
        <p className="text-muted mb-5">
          Elige el plan que se ajusta a tu proyecto.
        </p>
        <div className="row g-4">
          {planes.map((p, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="card border-0 shadow-sm rounded-4 p-4 h-100">
                <h5 className="fw-semibold text-success mb-2">{p.tipo}</h5>
                <h6 className="mb-3">{p.rango}</h6>
                <ul className="list-unstyled text-muted small mb-4">
                  {p.detalles.map((d, j) => (
                    <li key={j}>• {d}</li>
                  ))}
                </ul>
                <a href="#contacto" className="btn btn-success rounded-pill w-100">
                  Solicitar evaluación
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Planes;