import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imagen1 from "./images/lind.jpg"; // Importa las imágenes que representen cada servicio
import imagen2 from "./images/des.jpg"; // Ejemplo de otra imagen
import imagen3 from "./images/bat.jpg";
import imagen4 from "./images/dron.jpg";
import imagen5 from "./images/planos.jpg";

function Servicios() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    adaptiveHeight: true,
  };

  return (
    <section id="servicios">
      <h2>Servicios Topográficos</h2>
      <Slider {...settings}>
        <div className="slider-item">
          <div className="servicio-contenedor">
            <div className="servicio-texto">
              <h3>Levantamientos Prediales</h3>
              <p>
                Ofrecemos levantamientos prediales precisos, esenciales para la
                delimitación de terrenos y la identificación de límites de
                propiedad. Este servicio es clave para la elaboración de planos
                catastrales, escrituras y la gestión de títulos de propiedad.
                Con tecnología avanzada y un enfoque en la exactitud,
                garantizamos que cada levantamiento predial refleje fielmente la
                realidad del terreno, brindando seguridad legal y claridad en
                cualquier proceso de compraventa o desarrollo de terrenos.
              </p>
            </div>
            <div className="servicio-imagen">
              <img src={imagen1} alt="Levantamientos Prediales" />
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="servicio-contenedor">
            <div className="servicio-texto">
              <h3>Desenglobe de Linderos</h3>
              <p>
                Nuestro servicio de desenglobe de linderos permite la división
                precisa de terrenos en nuevas áreas o parcelas, garantizando la
                correcta asignación y delimitación de los límites de cada
                propiedad. Este proceso es fundamental para la segregación de
                terrenos, ventas parciales o ajustes en los linderos existentes.
                Trabajamos con herramientas de alta precisión para asegurar que
                cada desenglobe cumpla con los requisitos legales y catastrales,
                facilitando transacciones y proyectos inmobiliarios de manera
                confiable.
              </p>
            </div>
            <div className="servicio-imagen">
              <img src={imagen2} alt="Desenglobe de Linderos" />
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="servicio-contenedor">
            <div className="servicio-texto">
              <h3>Batimetrías</h3>
              <p>
                Realizamos batimetrías precisas para estudiar y mapear el
                relieve del fondo de cuerpos de agua, como lagos, ríos y
                embalses. Utilizando tecnología avanzada, obtenemos datos
                detallados sobre la profundidad y las características
                subacuáticas, esenciales para proyectos de ingeniería
                hidráulica, construcción de infraestructuras y análisis
                medioambientales. Nuestros estudios batimétricos garantizan
                información confiable para la planificación de obras, gestión de
                recursos hídricos y monitoreo de cambios en el entorno acuático.
              </p>
            </div>
            <div className="servicio-imagen">
              <img src={imagen3} alt="Batimetrías" />
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="servicio-contenedor">
            <div className="servicio-texto">
              <h3>Levantamiento Fotogrametricos</h3>
              <p>
                Ofrecemos levantamientos fotogramétricos con drones y cámaras de
                alta resolución, generando productos topográficos como:
                Ortofotos: Imágenes georreferenciadas de alta precisión, ideales
                para análisis visuales y planificación. Modelos Digitales de
                Terreno (DTM): Representaciones precisas del terreno sin incluir
                edificaciones o vegetación, perfectas para estudios
                topográficos. Modelos Digitales de Superficie (DSM): Modelos que
                incluyen todos los elementos sobre el terreno, útiles para
                análisis de construcción y planificación.
              </p>
            </div>
            <div className="servicio-imagen">
              <img src={imagen4} alt="Batimetrías" />
            </div>
          </div>
        </div>

        <div className="slider-item">
          <div className="servicio-contenedor">
            <div className="servicio-texto">
              <h3>Planos Topográficos</h3>
              <p>
                Realizamos planos topográficos detallados, esenciales para
                proyectos de ingeniería, construcción y planificación
                territorial. Estos planos reflejan con precisión la
                configuración del terreno, incluyendo curvas de nivel,
                ubicaciones de estructuras, límites de propiedad y otras
                características geográficas relevantes. Nuestros planos son
                fundamentales para estudios previos de obras, diseños de
                infraestructura y análisis geoespaciales, garantizando que cada
                proyecto cuente con información confiable y exacta para una
                planificación eficiente.
              </p>
            </div>
            <div className="servicio-imagen">
              <img src={imagen5} alt="Batimetrías" />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
}

export default Servicios;
