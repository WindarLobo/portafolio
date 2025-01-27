import React from "react";
import "./Content.css";
import ParticleHeaderBg from "../ParticlesBg/ParticlesHeader/ParticleHeaderBg";

/* ReactScroll */
import { Link } from "react-scroll";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Content = () => (
  <div className="contenido">
    <ParticleHeaderBg />
    <section className="inicio" id="inicio">
      <div className="titulo">
        <p data-aos="fade-up" data-aos-delay="600">
          <FormattedMessage id="greeting" defaultMessage="Hello" />
        </p>
        <h1 data-aos="fade-up" data-aos-delay="800">
          <FormattedMessage
            id="name"
            defaultMessage="I am  Windar Lobo Garces "
          />
        </h1>
        <p data-aos="fade-up" data-aos-delay="1000">
          <FormattedMessage id="rol" defaultMessage="Full-stack developer" />
        </p>
        <div className="slogan_content" data-aos="fade-up" data-aos-delay="900">
          <FormattedMessage
            id="slogan-conten"
            defaultMessage="I bring ideas to life, from backend to frontend."
          />
        </div>
        <div className="icon-redes">
          <div className="redes-sociales">
            <a
              href="https://www.linkedin.com/in/windar-lobo-garces/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://github.com/WindarLobo"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://t.me/winlobo"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              <i className="fab fa-telegram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=34697252307"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1800"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="mailto:lobo.winsus@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1900"
            >
              <i className="fab fas fa-envelope"></i>
            </a>
          </div>
          <div className="wrapper">
            <a
              className="button"
              href="https://www.linkedin.com/in/windar-lobo-garces/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1200"
            >
              <div className="icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <span>Linkedin</span>
            </a>
            <a
              className="button"
              href="https://github.com/WindarLobo/"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1400"
            >
              <div className="icon">
                <i className="fab fa-github"></i>
              </div>
              <span>Github</span>
            </a>
            <a
              className="button"
              href="https://t.me/winlobo"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1600"
            >
              <div className="icon">
                <i className="fab fa-telegram"></i>
              </div>
              <span>Telegram</span>
            </a>
            <a
              className="button"
              href="https://api.whatsapp.com/send?phone=34697252307"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1800"
            >
              <div className="icon">
                <i className="fab fa-whatsapp"></i>
              </div>
              <span>Whatsapp</span>
            </a>
            <a
              className="button"
              href="mailto:lobo.winsus@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              data-aos="fade-up"
              data-aos-delay="1900"
            >
              <div className="icon">
                <i className="fab fas fa-envelope"></i>
              </div>
              <span>Gmail</span>
            </a>
          </div>
        </div>
        {/* 
        <Link to="sobre-mi" href="#sobre-mi">
          <div className="scroll-down"></div>
        </Link>*/}
      </div>
    </section>
  </div>
);

export default Content;
