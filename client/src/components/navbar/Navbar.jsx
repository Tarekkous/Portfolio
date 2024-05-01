import React from "react";
import "../navbar/navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to={"/"}><span>
        <p>Tarek</p>
        <p>Koussaier</p>
      </span>
      </Link>
      <div className="menu">
        <div>
          <Link to={"/"}>
            {" "}
            <p className="Home">Home</p>
          </Link>
        </div>
        <div>
          <Link to={"/about"}>
            {" "}
            <p className="About">About</p>
          </Link>
        </div>
        <div>
          <Link to={"/contact"}>
            {" "}
            <p className="Contact">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
