import React, { useContext } from "react";
import "./Header.css";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";

/*Img lenguaje*/
import en from "../../assets/img/en.png";
import es from "../../assets/img/es.png";

const HeaderPage = () => {
  // Buttom language
  const idioma = useContext(langContext);
  // Menu desplegable
  const menuDesplegable = () => {
    let navbar = document.querySelector(".navbar");
    navbar.classList.toggle("activar");

    window.onscroll = () => {
      if (window.scrollY > 0) {
        document.querySelector(".site-header").classList.add("activar");
      } else document.querySelector(".site-header").classList.remove("activar");

      navbar.classList.remove("activar");
    };
  };

  return (
    <header className="site-header">
      <div
        id="menu-btn"
        className="fas fa-bars"
        onClick={menuDesplegable}
      ></div>

      <NavLink className="logo" to="/">
        <p>
          =(<span>WindarLobo</span>)=>
        </p>
      </NavLink>

      <nav className="navbar">
        <NavLink to="/" offset={-150} duration={500}>
          <FormattedMessage id="home" defaultMessage="Home" />
        </NavLink>
        <NavLink to="/about" offset={-150} duration={500}>
          <FormattedMessage id="about" defaultMessage="About me" />
        </NavLink>
        <div id="buttons">
          <img
            onClick={() => idioma.selectLanguage("en-US")}
            src={en}
            alt="EEUU"
          />
          <img
            onClick={() => idioma.selectLanguage("es-ES")}
            src={es}
            alt="España"
          />
        </div>
      </nav>
      <div className="switch" id="switch">
        <DarkMode />
      </div>
    </header>
  );
};

export default React.memo(HeaderPage);
