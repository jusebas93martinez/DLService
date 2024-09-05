import React, { useState } from "react";
import "./Contactenos.css";

function Contactenos() {
  // Manejadores de estado para los datos del formulario
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de datos, por ejemplo, enviarlos a una API o mostrar un mensaje
    alert(`Gracias, ${nombre}. Nos pondremos en contacto contigo pronto.`);
  };

  return (
    <section id="contactenos">
      <h2>Contáctenos</h2>
      <div className="contact-info">
        <p>
          <strong>Teléfonos:</strong>
        </p>
        <p>+57 322 8794566</p>
        <p>+57 310 4811869</p>
        <p>
          <strong>Correo Electrónico:</strong>
        </p>
        <p>mayradanidiaz@gmail.com</p>
        <p>lhernandezs955@gmail.com</p>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico:</label>
          <input
            type="email"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contactenos;
