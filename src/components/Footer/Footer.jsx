import React from "react";
import "./Footer.css";

/* Multi idioma */
import { FormattedMessage } from "react-intl";

const Footer = () => {
  // Fecha
  let fecha = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="site-footer">
        <div className="copyright">
          <p>
            <FormattedMessage
              id="footer-info"
              defaultMessage="Page created by WindarLobo"
            />
          </p>
          <br></br>
          <p>
            &copy; {fecha}{" "}
            <FormattedMessage
              id="footer-reserva"
              defaultMessage=".All Rights Reserved."
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default React.memo(Footer);
