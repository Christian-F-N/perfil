import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5 className="inicio1">Habilidades Técnicas</h5>
      <h2>Skills</h2>


      <div className="container experience__container">
        <div className="experience__programming">
          {/* <h3> Conocimientos de Backend Y Frontend </h3> */}
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML y CSS</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C#</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Java</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__devops">
          {/* <h3> Conocimientos de Arquitectura </h3> */}
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NETBEANS</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ANDOID STUDIO</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GITHUB</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>VISUAL STUDIO CODE</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>VISUAL STUDIO</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ORACLE APEX</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MATLAB</h4>
                <small className="text-light">Avanzado</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ANGULAR</h4>
                <small className="text-light">Intermedio</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
