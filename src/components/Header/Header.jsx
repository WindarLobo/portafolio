import React, { useContext } from "react";
import "./Header.css";
/* ReactScroll */
import { Link } from "react-scroll";

/* React router */
import { NavLink } from "react-router-dom";

/* DarkMode */
import DarkMode from "../DarkMode/DarkMode";

/* Language and img  */
import { FormattedMessage } from "react-intl";
import { langContext } from "../../context/Context";
import en from "../../assets/img/en.png";
import es from "../../assets/img/es.png";

const Header = () => {
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
        <Link to="inicio" spy={true} offset={-150} href="#inicio">
          <FormattedMessage id="home" defaultMessage="Home" />
        </Link>
        <Link to="sobre-mi" spy={true} offset={-150} href="#sobre-mi">
          <FormattedMessage id="about" defaultMessage="About me" />
        </Link>
        <Link to="contactos" spy={true} offset={-150} href="#contactos">
          <FormattedMessage id="contact" defaultMessage="Contact" />
        </Link>
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

export default React.memo(Header);
