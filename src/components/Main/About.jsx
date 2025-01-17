import React from "react";
import "../../pages/About/AboutPage.css";
import { Link } from "react-router-dom";
import cv from "../../cv/windar_sujey_lobo_garces_cv.pdf";
import { ButtomGet } from "../ButtomGet/ButtomGet";
/*Front-End*/
import htmlStiker from "../../assets/img/html.png";
import cssStiker from "../../assets/img/css-logo.png";
import javascriptStiker from "../../assets/img/javascript-logo-svg-vector.svg";
import reactStiker from "../../assets/img/react-logo22.png";
import bootstrapStiker from "../../assets/img/bootstrap-5-1.svg";
import typesEscritStiker from "../../assets/img/TypeScript-logo.png";
/*Backe-End */
import mongodbtStiker from "../../assets/img/mongo.png";
import psqlStiker from "../../assets/img/postgresql.png";
import java from "../../assets/img/java.webp";
import c from "../../assets/img/c.png";
import aspNet from "../../assets/img/aspnet.png";
import sql from "../../assets/img//sql.webp";
/*Herramientas */
import docker from "../../assets/img/docker.png";
import jira from "../../assets/img/jira-logo.png";
import postman from "../../assets/img/postman-icon.webp";
import visualCode from "../../assets/img/VisualEstudio_Code.png";
import visualStudio from "../../assets/img/visual-studio.png";
import github from "../../assets/img/github (3).png";
import git from "../../assets/img/git-logo2.png";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const About = () => (
  <section className="sobre-mi" id="sobre-mi">
    <h2 className="heading">
      <FormattedMessage id="about" defaultMessage="About me" />
    </h2>

    <div className="row container">
      <div className="columns" data-aos="fade-right" data-aos-delay="300">
        <h3>
          <FormattedMessage id="im" defaultMessage="who I am" />
        </h3>
        <h4>
          <FormattedMessage
            id="description"
            defaultMessage="My name is Windar Sujey Lobo Garces and I am a full stack developer."
          />
        </h4>
        <p>
          <FormattedMessage
            id="my-description"
            defaultMessage="I dedicated myself to web development, I am constantly learning about the technologies that I already master, I also seek to learn new technologies to enrich my skills and improve my good practices as a developer."
          />
        </p>
        <ul>
          <li>
            <p>
              <span>
                <FormattedMessage id="years" defaultMessage="Age:" />
              </span>
              31
            </p>
          </li>
          <li>
            <p>
              <span>Email:</span> lobo.winsus@gmail.com
            </p>
          </li>
          <li>
            <p>
              <span>
                <FormattedMessage id="from" defaultMessage="From:" />
              </span>
              España, Galicia
            </p>
          </li>
        </ul>
        <div className="mas-info">
          <a
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
            download="windar_sujey_lobo_garces_cv.pdf"
            className="btn-codigo buttonDownload"
          >
            <FormattedMessage id="btn-cv" defaultMessage="Download CV" />
          </a>
          <div className="mas-info-btn">
            <Link to="/about">
              <ButtomGet />
            </Link>
          </div>
        </div>
      </div>
      <div
        className="columns col-skill"
        data-aos="fade-left"
        data-aos-delay="650"
      >
        <h3>
          <FormattedMessage id="projects-habilides" defaultMessage="Skills" />
        </h3>
        <h4>Front-End</h4>
        <div className="skill">
          <div>
            <img alt="HTML" className="icons-skils" src={htmlStiker} />
            <h5>HTML</h5>
          </div>
          <div>
            <img alt="CSS" className="icons-skils" src={cssStiker} />
            <h5>CSS</h5>
          </div>
          <div>
            <img alt="Js" className="icons-skils" src={javascriptStiker} />
            <h5>JavaScript</h5>
          </div>
          <div>
            <img
              alt="Bootstrap"
              className="icons-skils"
              src={bootstrapStiker}
            />
            <h5>Bootstrap</h5>
          </div>
          <div>
            <img
              alt="jQuery"
              className="icons-skils"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-plain-wordmark.svg"
            />
            <h5>jQuery</h5>
          </div>
          <div>
            <img alt="React" className="icons-skils" src={reactStiker} />
            <h5>React</h5>
          </div>
          <div>
            <img
              alt="Typescript"
              className="icons-skils"
              src={typesEscritStiker}
            />
            <h5>Typescript</h5>
          </div>
        </div>
        <h4>Back-End</h4>
        <div className="skill">
          <div>
            <img alt="MogoDB" className="icons-skils" src={mongodbtStiker} />
            <h5>MongoDB</h5>
          </div>
          <div>
            <img alt="c" className="icons-skils" src={c} />
            <h5>C#</h5>
          </div>
          <div>
            <img alt="PostgresSQL" className="icons-skils" src={psqlStiker} />
            <h5>PostgresSQL</h5>
          </div>
          <div>
            <img alt="java" className="icons-skils" src={java} />
            <h5>Java</h5>
          </div>
          <div>
            <img alt="aspNet" className="icons-skils" src={aspNet} />
            <h5>aspNet</h5>
          </div>
          <div>
            <img alt="Sql Server" className="icons-skils" src={sql} />
            <h5>PosSql ServertgreSQL</h5>
          </div>
        </div>
        <h4>
          <FormattedMessage id="tools" defaultMessage="Tools" />
        </h4>
        <div className="skill">
          <div>
            <img
              alt="docker"
              className="icons-skils"
              src={docker}
              title="docker"
            />
            <h5>Docker</h5>
          </div>
          <div>
            <img alt="Jira" className="icons-skils" src={jira} title="Jira" />
            <h5>Jira</h5>
          </div>
          <div>
            <img
              alt="Visual Studio Code"
              className="icons-skils"
              src={visualCode}
              title="Visual Studio Code"
            />
            <h5>VS Code</h5>
          </div>
          <div>
            <img
              alt="Visual Studio"
              className="icons-skils"
              src={visualStudio}
              title="Visual Studio "
            />
            <h5>VS Studio</h5>
          </div>
          <div>
            <img alt="git" className="icons-skils" src={git} title="git" />
            <h5>Git</h5>
          </div>
          <div>
            <img
              alt="Postman"
              className="icons-skils"
              src={postman}
              title="Postman"
            />
            <h5>Postman</h5>
          </div>
          <div>
            <img
              alt="GitHub"
              className="icons-skils"
              src={github}
              title="GitHub"
            />
            <h5>GitHub</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default React.memo(About);
