import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5 className="inicioSer">Mis servicios</h5>

      <div className="container service__container">


        <article className="service">
          <div className="service__head">
            <h3>Desarrollo</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Maquetación y creación de interfaces de usuario
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo web
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de aplicaciones
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de software a medida
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de sistemas embebidos
              </p>
            </li>

          </ul>

        </article>


        <article className="service">
          <div className="service__head">
            <h3>Base de datos</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Diseño de base de datos                </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Desarrollo de consultas y optimización
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Administración de bases de datos
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Manipulación de datos a gran escala
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Migración de datos
              </p>
            </li>

          </ul>

        </article>


        <article className="service">
          <div className="service__head">
            <h3>Seguridad </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Evaluación de vulnerabilidades
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Pruebas de penetración
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Educación y concientización en seguridad
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Consultoría en cumplimiento normativo
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Predicción de amenazas y vulnerabilidades:
              </p>
            </li>
          </ul>

        </article>


      </div>
    </section>
  );
};

export default Services;
