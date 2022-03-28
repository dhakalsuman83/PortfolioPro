import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icons">
              <a href="https://www.facebook.com/suman.dhakal.77">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.instagram.com/soo_m_on/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/suman-dhakal-b6b265210/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/dhakalsuman83">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Suman</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Web Developer😎",
                    800,
                    "Software Developer✔",
                    1000,
                    "Full-Stack Developer🛒",
                    1000,
                    "Front-End Developer🥽",
                    1000,
                    "Software Engineer💻",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                looking for a Developer role to explore and expand my horizon of
                learning and yes,make a difference.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire me
            </button>
            <a
              href="Suman-Dhakal-Resume.pdf"
              download="Suman-Dhakal-Resume.pdf"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
