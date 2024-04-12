import React, { forwardRef } from "react";
import "./About.css";
import { useInView } from "react-intersection-observer";

const About = forwardRef(function hello(props, ref) {
  const { ref: ahRef, inView } = useInView();
  return (
    <div className="about-container" id="aboutID">
      <div className="about-card">
        <div className="graph"></div>

        <div className="about" ref={ref}>
          <div
            className={inView ? "about-heading" : "about-heading-prev"}
            ref={ahRef}
          >
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
