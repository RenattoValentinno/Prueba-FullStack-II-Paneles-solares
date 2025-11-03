import React from "react";

function Soluciones() {
  const soluciones = [
    {
      titulo: "Hogar 3–5 kW",
      desc: "Balance ideal entre costo y ahorro mensual.",
      icon: "bi-house-heart",
    },
    {
      titulo: "PyME 10–20 kW",
      desc: "Para operación diurna con buena irradiación.",
      icon: "bi-building-check",
    },
    {
      titulo: "Off-grid con baterías",
      desc: "Autonomía en zonas sin red eléctrica.",
      icon: "bi-battery-charging",
    },
  ];

  return (
    <section id="soluciones" className="py-5" style={{ backgroundColor: "#f8fbfc" }}>
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Soluciones</h2>
        <div className="row g-4">
          {soluciones.map((s, i) => (
            <div key={i} className="col-12 col-md-4">
              <div className="card border-0 shadow-sm rounded-4 h-100 p-4">
                <i className={`bi ${s.icon} text-success fs-2 mb-3`}></i>
                <h5 className="fw-semibold">{s.titulo}</h5>
                <p className="text-muted small">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Soluciones;