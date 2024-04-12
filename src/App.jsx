import React, { useRef, useState } from "react";
import "./Components/Navbar/Navbar.css";
import { useInView } from "react-intersection-observer";
import About from "./Components/About/About";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import Events from "./Components/Events/Events.jsx";
import OurTeam from "./Components/Our Team/OurTeam";
import Footer from "./Components/Footer/Footer";
import Landing from "./Components/Landing/Landing.jsx";
import "./App.css";
export default function App() {
  const { ref: aRef, inView: aboutVisible } = useInView();
  const { ref: eRef, inView: eventsVisible } = useInView();
  const { ref: tRef, inView: teamVisible } = useInView();
  var aboutId = document.getElementById("aboutID");
  var eventsId = document.getElementById("eventsID");
  var teamId = document.getElementById("teamID");

  return (
    <div>
      <div className="navbar">
        <div className="navbar-item">
          <FaHome />
        </div>
        <div
          className={aboutVisible ? "navbar-item-active" : "navbar-item"}
          onClick={() => {
            aboutId.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaInfoCircle />
        </div>
        <div
          className={eventsVisible ? "navbar-item-active" : "navbar-item"}
          onClick={() => {
            eventsId.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaStoreAlt />
        </div>
        <div className={teamVisible ? "navbar-item-active" : "navbar-item"}>
          <RiTeamFill
            onClick={() => {
              teamId.scrollIntoView({ behavior: "smooth" });
            }}
          />
        </div>
      </div>
      <Landing />
      <About ref={aRef} />
      <Events ref={eRef} />
      <OurTeam ref={tRef} />
      <Footer />
    </div>
  );
}
