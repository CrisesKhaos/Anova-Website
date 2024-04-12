import React, { useRef } from "react";
import ReactDOM from "react-dom/client";
import About from "./Components/About/About.jsx";
import "./index.css";
import Events from "./Components/Events/Events.jsx";
import OurTeam from "./Components/Our Team/OurTeam.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import { FaHome } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import { FaStoreAlt } from "react-icons/fa";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
