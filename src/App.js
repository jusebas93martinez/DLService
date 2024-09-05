import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Header from "./components/Header";
import Servicios from "./components/Servicios";
import Nosotros from "./components/Nosotros";
import Contactenos from "./components/Contactenos";
import "./App.css"; // Asegúrate de que App.css esté cargado
import "./components/Servicios.css"; // Estilos de Servicios

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/contactenos" element={<Contactenos />} />
            <Route path="/" element={<Navigate to="/servicios" />} />
          </Routes>
        </main>
        {/* Ícono flotante de WhatsApp */}
        <a
          href="https://wa.me/573228794566" // Aquí pon el número de WhatsApp con el que quieres iniciar la conversación
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png" // Puedes cambiar la URL por la de tu propio ícono
            alt="WhatsApp"
          />
        </a>
      </div>
    </Router>
  );
}

export default App;
