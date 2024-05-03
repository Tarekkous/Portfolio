import React from "react";
import "../home/home.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faJsSquare,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import Experiences from "../../components/experiences/Experiences";
import Skills from "../../components/skills/Skills";

const Home = () => {
  return (
    <div className="container">
      <div className="section">
        <div className="home">
          <div className="headerBody">
            <div className="presentation">
              <h1>Hi i'm Tarek</h1>
              <h2>Im a web developer</h2>
              <Link to={"/contact"}>
                <button>Let's connect</button>
              </Link>
            </div>
            <div className="picture">
              <img src="/assets/profilePic.png" alt="Profile" />{" "}
            </div>
          </div>
          <div className="technologies">
            <h3>Development technologies</h3>
            <div className="react">
              <FontAwesomeIcon icon={faReact} size="2x" />
            </div>
            <div className="angular">
              <FontAwesomeIcon icon={faAngular} size="2x" />
            </div>
            <div className="js">
              <FontAwesomeIcon icon={faJsSquare} size="2x" />
            </div>
            <div className="sql">
              <FontAwesomeIcon icon={faDatabase} size="2x" />
            </div>
            <div className="nodeJs">
              <FontAwesomeIcon icon={faNodeJs} size="2x" />
            </div>
          </div>
        </div>
      </div>
      <Experiences />
      <Skills/>
    </div>
  );
};

export default Home;
