import React, { forwardRef, useState } from "react";
import "./OurTeam.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const OurTeam = forwardRef(function OurTeam(props, ref) {
  const [execs, setExecs] = useState(true);
  return (
    <div className="team-container" id="teamID">
      <div className="ourteam-title">//OUR TEAM</div>

      <div className="team-tabs">
        <div
          className={execs ? "team-tab-active" : "team-tab"}
          onClick={() => {
            setExecs(true);
          }}
        >
          Execs
        </div>
        <div
          className={execs ? "team-tab" : "team-tab-active"}
          onClick={() => {
            setExecs(false);
          }}
        >
          Core
        </div>
      </div>

      <div className="team-cards">
        <div class="wrapper">
          <div class="img-area">
            <div class="inner-area">
              <img
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div class="name">Dievyansh Singh</div>
          <div class="about-team">Chairperson</div>
          <div class="social-icons">
            <div className="social-button">
              <FaInstagram className="insta" />
            </div>

            <div className="social-button">
              <FaLinkedinIn className="linkedin" />
            </div>

            <div className="social-button">
              <MdMailOutline />
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="img-area">
            <div class="inner-area">
              <img
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>
          <div ref={ref}></div>
          <div class="name">Dievyansh Singh</div>
          <div class="about-team">Chairperson</div>
          <div class="social-icons">
            <div className="social-button">
              <FaInstagram className="insta" />
            </div>

            <div className="social-button">
              <FaLinkedinIn className="linkedin" />
            </div>

            <div className="social-button">
              <MdMailOutline />
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="img-area">
            <div class="inner-area">
              <img
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div class="name">Dievyansh Singh</div>
          <div class="about-team">Chairperson</div>
          <div class="social-icons">
            <div className="social-button">
              <FaInstagram className="insta" />
            </div>

            <div className="social-button">
              <FaLinkedinIn className="linkedin" />
            </div>

            <div className="social-button">
              <MdMailOutline />
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="img-area">
            <div class="inner-area">
              <img
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div class="name">Dievyansh Singh</div>
          <div class="about-team">Chairperson</div>
          <div class="social-icons">
            <div className="social-button">
              <FaInstagram className="insta" />
            </div>

            <div className="social-button">
              <FaLinkedinIn className="linkedin" />
            </div>

            <div className="social-button">
              <MdMailOutline />
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="img-area">
            <div class="inner-area">
              <img
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div class="name">Dievyansh Singh</div>
          <div class="about-team">Chairperson</div>
          <div class="social-icons">
            <div className="social-button">
              <FaInstagram className="insta" />
            </div>

            <div className="social-button">
              <FaLinkedinIn className="linkedin" />
            </div>

            <div className="social-button">
              <MdMailOutline />
            </div>
          </div>
        </div>
        <div class="wrapper">
          <div class="img-area">
            <div class="inner-area">
              <img
                src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                alt=""
              />
            </div>
          </div>

          <div class="name">Dievyansh Singh</div>
          <div class="about-team">Chairperson</div>
          <div class="social-icons">
            <div className="social-button">
              <FaInstagram className="insta" />
            </div>

            <div className="social-button">
              <FaLinkedinIn className="linkedin" />
            </div>

            <div className="social-button">
              <MdMailOutline />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default OurTeam;
