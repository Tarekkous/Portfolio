import React from "react";
import "../about/about.scss";
import {
  faReact,
  faAngular,
  faHtml5,
  faNodeJs,
  faCss3,
} from "@fortawesome/free-brands-svg-icons";

import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const About = () => {
  return (
    <div className="container">
      <div className="text-zone">
        <h1>About Me</h1>
        <p>
          I am Tarek Koussaier, a 25-year-old application developer, holder of a
          Bachelor's degree (Bac+3/4) in application development certified
          RNCP31678.
        </p>
        <p>
          I am motivated to continually develop my knowledge and skills in order
          to adapt to the latest technological trends.
        </p>
        <p>
          Perseverance is one of my defining qualities, along with ambition,
          patience, seriousness, adaptability, and an exceptional team spirit.
        </p>
        <div className="language">
          <p>Spoken Languages</p>
          <span>French</span>
          <span>English</span>
          <span>Arabic</span>
        </div>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faAngular} size="2x" color="#DD0031" />
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faReact} size="2x" color="#61DAFB" />
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faHtml5} size="2x" color="#F06529" />
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faDatabase} size="2x" color="#00758F" />
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faNodeJs} size="2x" color="#339933" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faCss3} size="2x" color="#28A4D9" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
