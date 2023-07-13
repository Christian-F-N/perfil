import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/pro1.png";
import IMG2 from "../../assets/pro2.png";
import IMG3 from "../../assets/pro3.png";
import IMG4 from "../../assets/pro4.png";
import IMG5 from "../../assets/ext.png";
import IMG6 from "../../assets/pro7.png";

const cardContent = [
  {
    id: 1,
    image: IMG1,
    title: "Control de temperatura mediante lógica difusa y Arduino: Optimización de la gestión térmica",
    github: "https://github.com/Christian-F-N/Control-de-temperatura",
    demo: "https://github.com/Christian-F-N/Control-de-temperatura",
  },
  {
    id: 2,
    image: IMG2,
    title: "Reconocimiento facial con Algoritmos de Inteligencia Artificial: Mejorando la precisión y eficiencia en la identificación de rostros",
    github: "https://github.com/Christian-F-N/Reconocimiento-facial",
    demo: "https://github.com/Christian-F-N/Reconocimiento-facial",
  },
  {
    id: 3,
    image: IMG3,
    title: "Simulador de Amortización: Comparación entre Sistema Francés y Sistema Alemán",
    github: "https://github.com/Christian-F-N/Simulador_de_Amortizacion",
    demo: "https://github.com/Christian-F-N/Simulador_de_Amortizacion",
  },
  {
    id: 4,
    image: IMG4,
    title: "Impresora Térmica Personalizada con Arduino: Diseño y Construcción de una Solución de Impresión de Etiquetas y Tickets",
    github: "https://github.com/Christian-F-N/Impresora-Termica",
    demo: "https://github.com/Christian-F-N/Impresora-Termica",
  },
  {
    id: 5,
    image: IMG5,
    title: "Creación de Servicios Utilizando Java: Desarrollo de Soluciones Robustas y Escalables",
    github: "https://github.com/Christian-F-N/Creacion-de-Servicios-Utilizando-Java",
    demo: "https://github.com/Christian-F-N/Creacion-de-Servicios-Utilizando-Java",
  },
  {
    id: 6,
    image: IMG6,
    title: "Modificación de Imágenes y Manipulación de Espectros de Color con MATLAB: Explorando las Posibilidades Creativas en el Procesamiento de Imágenes",
    github: "https://github.com/Christian-F-N/Modificacion-de-Imagenes",
    demo: "https://github.com/Christian-F-N/Modificacion-de-Imagenes",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="inicioSer">Proyectos recientes</h5>

      <div className="container portfolio__container">
        {cardContent.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image"></div>
              <img src={image} alt={title}></img>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
