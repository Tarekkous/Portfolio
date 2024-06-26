import React, { useEffect, useRef } from "react";
import "../skills/skills.scss";

const Skills = () => {
  const skillRef = useRef(null);

  useEffect(() => {
    const skillSection = skillRef.current
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            skillSection.classList.add("appear")
          }
        });
      },
      { threshold: 0.2 }
    );
    if (skillSection) {
      observer.observe(skillSection);
    }
    return () => {
      if (skillSection) {
        observer.unobserve(skillSection); // Assurez-vous de nettoyer correctement
      }
    };
  }, []);

  return (
    <div className="container">
      <div className="skills" ref={skillRef}>
        <span>Skills</span>
        <div className="front">
          <p className="title">Front-end Web Development</p>
          <p className="techno">Angular | React.js | css | scss | TypeScript</p>
        </div>
        <div className="back">
          <p className="title">Back-End Web Development</p>
          <p className="techno">Node.js (Express)</p>
        </div>
        <div className="design">
          <p className="title">Ui | Ux Design</p>
          <p className="techno">figma</p>
        </div>
        <div className="database">
          <p className="title">Data Bases</p>
          <p className="techno">SQL | MYSQL | MONGODB</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
