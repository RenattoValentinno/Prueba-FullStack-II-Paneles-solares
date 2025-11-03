import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">
          <img
            src="/logo192.png"
            alt="HelioAndes"
            width="35"
            className="me-2"
          />
          HelioAndes
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item mx-2">
              <a className="nav-link" href="#inicio">Inicio</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#servicios">Servicios</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#soluciones">Soluciones</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#demo-calculadora">DEMO</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#planes">Planes</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#testimonios">Testimonios</a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
            <li className="nav-item mx-2">
              <a className="btn btn-success rounded-pill px-3" href="#contacto">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;