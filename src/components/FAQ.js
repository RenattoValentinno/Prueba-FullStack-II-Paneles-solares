import React, { useState } from "react";

function FAQ() {
  const preguntas = [
    {
      q: "¿Incluye trámites y certificación?",
      a: "Sí, nuestros servicios incluyen tramitación SEC y documentación eléctrica completa.",
    },
    {
      q: "¿Ofrecen financiamiento?",
      a: "Sí, contamos con planes de pago flexibles y apoyo en la gestión de créditos verdes.",
    },
    {
      q: "¿Tienen despacho a regiones?",
      a: "Enviamos equipos a todo Chile mediante transporte asegurado y seguimiento en línea.",
    },
  ];

  const [abierta, setAbierta] = useState(null);

  return (
    <section id="faq" className="py-5 bg-white">
      <div className="container">
        <h2 className="fw-bold text-center mb-4">FAQ</h2>
        <div className="mx-auto" style={{ maxWidth: "700px" }}>
          {preguntas.map((p, i) => (
            <div key={i} className="mb-3">
              <button
                className="btn btn-outline-success w-100 text-start rounded-4"
                onClick={() => setAbierta(abierta === i ? null : i)}
              >
                {p.q}
              </button>
              {abierta === i && (
                <div className="p-3 border rounded-bottom bg-light text-muted small">
                  {p.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;