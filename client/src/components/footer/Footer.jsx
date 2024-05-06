import React from "react";
import "../footer/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logoSocial">
        <div className="linkedin">
          <Link to={"https://linkedin.com/in/tarekkous/"}>
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ margin: "10px" }}
            />
          </Link>
        </div>
        <div className="github">
          <Link to={"https://github.com/Tarekkous"}>
            <FontAwesomeIcon
              icon={faGithub}
              style={{ margin: "10px" }}
            />
          </Link>
        </div>
      </div>
      <div className="copyrights">
        <div className="logo">
          <FontAwesomeIcon icon={faCopyright} className="logo-c" />
          Copyright-2024
        </div>
        <div className="name">
          <p>Tarek Koussaier</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
