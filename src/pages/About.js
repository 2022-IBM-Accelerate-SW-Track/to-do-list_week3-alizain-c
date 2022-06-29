import React, { Component } from 'react';
import "./About.css";
import alizain from "../assets/alizain.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
    <div class="split left">
    <h1 className="ibmplex">ABOUT ME</h1>
      <div className="centered">
        <img
          className="profile_image"
          src={alizain}
          alt="Profile Pic"
          ></img>
      </div>
    </div>
    <div className="split right">
      <div className="centered">
        <div className="alizain">Ali Zain Charolia</div>
        <div className="brief_description">
          CS + Math + Business @ University of Houston <br></br>
          SDE Intern @ <a href="https://pros.com">PROS, Inc.</a> | <a href="https://ibm.com">IBM</a> Accelerate '22 <br></br>
          Aspiring SDE/SWE | ML/AI Enthusiast <br></br>
          Avid Learner, Team player, Software Engineer <br></br><br></br>
          Hobbies: Soccer, Tennis, Hiking, <br></br> Binge-wacthing Netflix, and of course, coding! :)
        </div>
      </div>
    </div>
  </div>

      </div>

    )
  }
}
