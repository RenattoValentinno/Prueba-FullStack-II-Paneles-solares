import React from "react";

function Hero() {
  return (
    <section
      className="py-5"
      style={{ backgroundColor: "#f8fbfc", minHeight: "60vh" }}
    >
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between">
        <div className="text-center text-lg-start mb-4 mb-lg-0">
          <span className="badge bg-success-subtle text-success mb-2">
            Energía solar
          </span>
          <h1 className="fw-bold mb-3 text-dark">
            Energía solar accesible y confiable <br /> para tu hogar o pyme
          </h1>
          <p className="text-muted mb-4">
            Dimensiona tu sistema, conoce el costo estimado y solicita asesoría
            en minutos. La DEMO te guía con valores referenciales.
          </p>
          <div>
            <a
              href="#demo-calculadora"
              className="btn btn-success me-2 rounded-pill px-4"
            >
              Ver DEMO
            </a>
            <a
              href="#"
              className="btn btn-outline-secondary rounded-pill px-4"
            >
              Descargar catálogo
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1698/1698535.png"
            alt="Panel solar"
            width="320"
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;