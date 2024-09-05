import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Importar el archivo CSS con los nuevos estilos

function Header() {
  return (
    <header className="main-header">
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/servicios">Servicios</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/contactenos">Contáctenos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
