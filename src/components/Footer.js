import React from "react";

function Footer() {
  return (
    <footer className="py-4 bg-dark text-center text-white mt-5">
      <div className="container">
        <p className="mb-1">
          © 2025 HelioAndes Energía — Todos los derechos reservados
        </p>
        <p className="small mb-0">
          <a href="#privacidad" className="text-white-50 me-2">
            Privacidad
          </a>
          •
          <a href="#terminos" className="text-white-50 ms-2">
            Términos
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;