import React, { forwardRef } from "react";
import "./About.css";

const About = forwardRef(function hello(props, ref) {
  return (
    <div className="about-container" id="aboutID">
      <div className="about-card">
        <div className="graph"></div>

        <div className="about">
          <div className="about-heading" ref={ref}>
            ABOUT
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet. Aut totam libero qui iusto laudantium
              Lorem ipsum dolor sit amet. Aut totam libero qui iusto laudantium
              Lorem ipsum dolor sit amet. Aut totam libero qui iusto laudantium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default About;
