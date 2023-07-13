import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from '../../assets/foto.png'
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h5 className="inicio"> ¡Hola! Mi nombre es...</h5>
        <h1>Christian Núñez</h1>
        <h5 className="h5.text-light">
          junior developer
        </h5>
        <br></br>
        <p>Soy un desarrollador junior apasionado por la programación y la tecnología. Estoy en la fase final de mi carrera de Ingeniería en Software, donde he adquirido conocimientos sólidos a través de mi participación en diversos proyectos que involucran diferentes lenguajes de programación, frameworks y bases de datos. Mi objetivo es seguir creciendo profesionalmente y contribuir con soluciones innovadoras en el campo de la ingeniería de software.</p>
        <CTA />

      </div>
      <div className="header-right">
        <div className="me">
          <img src={ME} alt="me"></img>
        </div>
        <HeaderSocials />
        <a href="#contact" className="scroll__down" >¡Contáctame!</a>
      </div>
    </header >
  );
};

export default Header;
