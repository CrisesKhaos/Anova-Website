import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { FiGithub } from "react-icons/fi";

import "./Footer.css";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="credits">
        <div className="credit-normal">Developed by&nbsp;</div>
        <div></div>
        <a href="https://www.linkedin.com/in/vedant" target="_blank">
          <div className="credit-name">Vedant</div>
        </a>
      </div>
      <div className="heading-container">
        <div className="footer-heading">ANOVA</div>
        <div className="footer-subHeading">A NEXUS OF VARIANCE</div>
      </div>
      <div className="footer-socials">
        <a>
          <div className="btn">
            <FaInstagram className="insta-footer" />
          </div>
        </a>
        <a>
          <div className="btn">
            <FaLinkedinIn className="linkedin-footer" />
          </div>
        </a>
        <a>
          <div className="btn">
            <FiGithub className="github-footer" />
          </div>
        </a>
        <a>
          <div className="btn">
            <MdMailOutline className="mail-footer" />
          </div>
        </a>
      </div>
    </div>
  );
}
