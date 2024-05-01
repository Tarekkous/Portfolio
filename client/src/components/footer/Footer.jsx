import React from "react";
import "../footer/footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
  return (
    <div className="footer">
      <div className="logo">
        <span>l</span>
        <span>l</span>
        <span>ll</span>
      </div>
      <div className="copyrights">
        <div className="logo">
        <FontAwesomeIcon icon={faCopyright} className="logo-c" />  Copyright-2024
        </div>
        <div className="name">
          <p>Tarek Koussaier</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
