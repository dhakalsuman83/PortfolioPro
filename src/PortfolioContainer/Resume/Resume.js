import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen != props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet">
            <div className="heading-blob"></div>
            <span>{props.heading ? props.heading : ""}</span>
            {props.fromDate && props.toDate ? (
              <div className="heading-date">
                {props.fromDate + "_" + props.toDate}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="resume-sub-heading">
            <span>{props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span>{props.description ? props.description : ""}</span>
          </div>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interest", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 75 },
    { skill: "CSS", ratingPercentage: 70 },
    { skill: "Express JS", ratingPercentage: 75 },
    { skill: "Node JS", ratingPercentage: 60 },
    { skill: "Angular", ratingPercentage: 50 },
    { skill: "PostgresSQL", ratingPercentage: 65 },
    { skill: "React", ratingPercentage: 50 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2022", toDate: "2022" },
      description:
        "A personal website that reflects me in the technological way",
      subHeading:
        "Technologies Used: React, Html, CSS, JavaScript, node, Bootstrap",
    },
    {
      title: "A Coffee Website",
      duration: { fromDate: "2021", toDate: "2021" },
      description: "A website for the imaginary coffee shop",
      subHeading: "Technologies Used: Vanilla HTML, CSS, and JavaScript",
    },
    {
      title: "Movie Rating Web App",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "A web app that uses the movie database API and load the movies dynamically with the search functionality and allows the logged in users only to rate the movies. ",
      subHeading:
        "Technologies Used: Html, CSS, JavaScript, Express JS, Bootstrap, RestfulAPI, postgresSQL",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"INCO ACADEMY"}
        subHeading={"3 months Web Development Bootcamp"}
        fromDate={"2021"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"University of the Sunshine Coast"}
        subHeading={"Masters in Information and Commuication Technology"}
        fromDate={"2019"}
        toDate={"2021"}
      />
      <ResumeHeading
        heading={"Kantipur Engineering Colloge, Tribhuvan University"}
        subHeading={"Bachelor's in Computer Engineering"}
        fromDate={"2014"}
        toDate={"2018"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"ZippyCrowd"}
        subHeading={"A Junior Developer"}
        fromDate={"2021"}
        toDate={"present"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          I have been volunteering as a junior web developer at ZippyCrowd.
        </span>
      </div>

      <div className="experience-description">
        <span className="resume-description-text">
          • Collaborated with UI and UX personnel to develop friendly and usable
          website using HTML, CSS, JavaScript, and Front-end framework
          (ANGULAR).
        </span>
        <br />
        <span>
          • Worked successfully with diverse group of co-workers to accomplish
          goals and address issues related to our products and services.
        </span>
        <br />
        <span>
          • Determined job priorities for multiple projects and communicated
          sequencing, priorities, and timelines to entire team.
        </span>
        <br />
        <span>
          • Participated in team meetings and provided input on deadlines,
          designs, and enhancements.
        </span>
        <br />
        <span>
          • Assisted internal staff with troubleshooting to quickly resolve
          software issues.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-blob"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetail, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetail.title}
          subHeading={projectDetail.subHeading}
          description={projectDetail.description}
          fromDate={projectDetail.duration.fromDate}
          toDate={projectDetail.duration.toDate}
        />
      ))}
    </div>,
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Football"
        description="dkhUGIGDFdugh iDHFouhfuhAUFHousahf9u"
      />
      <ResumeHeading
        heading="Football"
        description="dkhUGIGDFdughiDHFouhfuhAUFHousahf9u"
      />
      <ResumeHeading
        heading="Football"
        description="dkhUGIGDFdughiDHFouhfuhAUFHousahf9u"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 450;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        classname="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"> </div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
