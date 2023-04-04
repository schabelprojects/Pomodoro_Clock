import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";
import puclogo from "./../../assets/puchamburg.png";

function LandingPage() {
  return (
    <>
      <div className="pucLogo">
        <img src={puclogo} alt="default" />
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
