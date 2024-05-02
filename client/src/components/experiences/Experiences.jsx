import React, { useEffect, useRef } from "react";

import "../experiences/experiences.scss";

const Experiences = () => {

  const skillRef = useRef(null);

  useEffect(() => {
    const element = skillRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && element) {
            element.classList.add("appear")
          }
        });
      },
      { threshold: 0.2 }
    );
    if (element) {
      observer.observe(element);
    }
    return () => {
      if (element) {
        observer.unobserve(element); // Assurez-vous de nettoyer correctement
      }
    };
  }, []);






  return (
    <div className="container">
      <div className="experiences" ref={skillRef}>
        <span>Professionel Experiences </span>
        <div className="first-E">
          <h4>End-of-Year Project Internship</h4>
          <p className="date">Loko France | January 2023 - March 2023 </p>
          <p>
            Participated in the implementation of a web application solution for
            managing queue systems for merchants "PostgreSQL, Angular, NodeJs,
            ExpressJs"
          </p>
        </div>
        <div className="second-E">
          <h4>Hackathon Digital x Outdoor</h4>
          <p className="date">Open Geneva | May 2, 2022 - May 5, 2022 </p>
          <p>
            Developed a solution to problems associated with outdoor activities.
            Created a prototype of an application and presented it.
          </p>
        </div>
      </div>
      <div className="education">
        <span>Education </span>
        <div className="first-Ed">
          <h4>Bachelor's Degree in Application Development and Design</h4>
          <p className="date">
            Digifab, Annemasse (Bachelor's Level) | April 2022 - March 2023
          </p>
        </div>
      <div className="second-Ed">
        <h4>Management Information Systems</h4>
        <p className="date">
        Sherbrooke Academy in Tunis, October 2019 - January 2020
        </p>
      </div>
      <div className="third-Ed">
        <h4>Scientific Baccalaureate</h4>
        <p className="date">
        Saada Ali Douagi High School, La Marsa, Tunis | September 2018 - June 2019
        </p>
      </div>
      </div>
      <div className="logo">
        <img src="/assets/digifab.png" alt="digifab" />
        <img src="/assets/openGeneva.png" alt="openGeneva" />
      </div>
    </div>
  );
};

export default Experiences;
