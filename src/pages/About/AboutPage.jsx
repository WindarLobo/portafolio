import React from "react";
import "./AboutPage.css";

/* Componet */
import HeaderPage from "../../components/Header/HeaderPage";
import Footer from "../../components/Footer/Footer";
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import cv from "../../cv/windar_sujey_lobo_garces_cv.pdf";
/*Front-End*/
import htmlStiker from "../../assets/img/html.png";
import cssStiker from "../../assets/img/css-logo.png";
import javascriptStiker from "../../assets/img/javascript-logo-svg-vector.svg";
import reactStiker from "../../assets/img/react-logo22.png";
import bootstrapStiker from "../../assets/img/bootstrap-5-1.svg";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

/* Img */
import imgabout from "../../assets/img/photo-perfil.jpg";

const About = () => {
  function readMore() {
    let btnHide = document.querySelector("#btn-hide");
    let parrafoActive = document.querySelector(".parrafo-active");

    parrafoActive.classList.toggle("show");

    if (parrafoActive.classList.contains("show")) {
      btnHide.innerHTML = "↑";
    } else {
      btnHide.innerHTML = "Read more";
    }
  }

  return (
    <div>
      <HeaderPage />

      <ParticleBackground />

      <main>
        <section className="sobre-mi-seccion" id="sobre-mi">
          <div className="sobre-mi-container">
            <div className="sobre-mi-img-container">
              <img src={imgabout} alt="" className="sobre-mi-img" />

              <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="windar_sujey_lobo_garces_cv.pdf"
                className="btn-codigo cv buttonDownload"
              >
                <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
              </a>
            </div>
            <div className="sobre-mi-info">
              <p>
                <FormattedMessage
                  id="about-info-1"
                  defaultMessage="Hello, I am Windar Sujey Lobo Garces, a student at Colegio de Fomento Montecastelo in Galicia, Spain. I consider myself a person passionate about programming and web development."
                />
              </p>

              <div className="hide parrafo-active">
                <p>
                  <FormattedMessage
                    id="about-info-2"
                    defaultMessage="I am a self-taught individual because I enjoy constantly learning every day, whether it's about new technologies or new development methods that help me refine and elevate my level of knowledge."
                  />
                </p>
              </div>

              <div className="btn-info">
                <div
                  className="custom-btn btn-codigo"
                  id="btn-hide"
                  onClick={readMore}
                >
                  <span>Read more</span>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-seccion">
            <h1 className="heading">
              <FormattedMessage
                id="projects-habilides"
                defaultMessage="Skills"
              />
            </h1>
            <div className="skill-container">
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="HTML"
                  className="skills-img icon-li"
                  src={htmlStiker}
                  title="HTML5"
                />
                <h2 className="skill-name">HTML</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              >
                <img
                  alt="CSS"
                  className="skills-img icon-li"
                  src={cssStiker}
                  title="CSS3"
                />
                <h2 className="skill-name">CSS</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="Js"
                  className="skills-img icon-li"
                  src={javascriptStiker}
                  title="Java Script"
                />
                <h2 className="skill-name">Javascript</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-left"
                data-aos-delay="300"
              >
                <img
                  alt="React"
                  className="skills-img"
                  src={reactStiker}
                  title="React"
                />
                <h2 className="skill-name">React</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-down"
                data-aos-delay="300"
              >
                <img
                  alt="Bootstrap"
                  className="skills-img"
                  src={bootstrapStiker}
                  title="Bootstrap"
                />
                <h2 className="skill-name">Bootstrap</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              >
                <img
                  alt="jQuery"
                  className="skills-img"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
                  title="jQuery"
                />
                <h2 className="skill-name">jQuery</h2>
              </div>
              <div
                className="skill-card"
                data-aos="flip-right"
                data-aos-delay="300"
              ></div>
              <div
                className="skill-card"
                data-aos="flip-up"
                data-aos-delay="300"
              ></div>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </div>
  );
};
export default About;
