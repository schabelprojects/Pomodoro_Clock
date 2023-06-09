import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import schabelprojectslogo from "../../assets/schabelprojects-logos_transparent.png";

function LandingPage() {
  return (
    <>
      <div className="pucLogo">
        <img src={schabelprojectslogo} alt="default" />
      </div>

      <div className="title">
        <h1>Pomodoro Timer</h1>
      </div>

      <Link className="start" to={"/home"}>
        Start
      </Link>
    </>
  );
}

export default LandingPage;
