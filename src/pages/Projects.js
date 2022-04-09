import React from "react";
import PIC from "../assets/images/index";
import "./Projects.css";
import "bootstrap/dist/css/bootstrap.css";

function Projects() {
  return (
<div>
<div className="container-fluid">
  <div className="text-center mt-4 mb-4" id="Work">
    <h1>Portfolio</h1>
  </div>
  
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card main-card border ml-4 mr-4">
          <img src={PIC.repost} className="mx-auto rounded img-fluid" alt="rePost Project"/>
       
          <div className="card-body text-center">
            <h5 className="card-title">rePost Group Project</h5>
            <p className="card-text">A simple blog post. Tumblr clone that uses the model, view, controller (MVC) structure.</p>
            <a href="https://repostproject.herokuapp.com/" className="card-link" target="_blank" rel="noreferrer noopener">View  </a>
            <a href="https://github.com/selden-CBC2021/rePost" target="_blank" rel="noreferrer noopener"> GitHub</a>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div className="row row-cols-1 row-cols-md-2" id="projects">
      <div className="col mb-4">
        <div className="card">
          <img src={PIC.covid}className="card-img-top" alt="Covid19 risk assessment"/>
      
        <div className="card-body">
          <h5 className="card-title">Covid19Risk-VaccineAssessment</h5>
          <p className="card-text">An app showing the global and U.S. covid cases/deaths using geo-location and Web-APIs for real-time data.</p>
          <a href="https://mxdragon.github.io/Covid19Risk-VaccineAssessment/" target="_blank" rel="noreferrer noopener">View  </a>
          <a href="https://github.com/MXDragon/Covid19Risk-VaccineAssessment" target="_blank" rel="noreferrer noopener"> GitHub</a>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={PIC.weather} className="card-img-top" alt="Weather Dashboard"/>
      <div className="card-body">
        <h5 className="card-title">Weather-Dashboard</h5>
        <p className="card-text ">Weather app showing current conditions and 5-day forecast of any city in the US. Uses OpenWeather Api and utilizes local storage.</p>
        <a href="https://selden-cbc2021.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer noopener">View  </a>
        <a href="https://github.com/selden-CBC2021/Weather-Dashboard" target="_blank" rel="noreferrer noopener"> GitHub</a>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={PIC.fitness} className="card-img-top" alt="Fitness tracker"/>
      <div className="card-body">
        <h5 className="card-title">Fitness Tracker</h5>
        <p className="card-text">A Node.js based app that keeps track of your exercises and workouts. Uses MongoDB, Mongoose, and Express to handle routes and middleware.  </p>
        <a href="https://thawing-wave-27284.herokuapp.com/?id=614b8a8baf10840016248306" target="_blank" rel="noreferrer noopener">View  </a>
        <a href="https://github.com/selden-CBC2021/NoSQL-Workout-Tracker" target="_blank" rel="noreferrer noopener"> GitHub</a>
      </div>
    </div>
  </div>
  <div className="col mb-4">
    <div className="card">
      <img src={PIC.workdayScheduler} className="card-img-top" alt="Event planner"/>
      <div className="card-body">
        <h5 className="card-title">Event Planner</h5>
        <p className="card-text">Simple app that that can track your working day</p>
        <a href="https://stark-reef-03061.herokuapp.com/" target="_blank" rel="noreferrer noopener">View  </a>
        <a href="https://github.com/selden-CBC2021/ExpressNoteTaker" target="_blank" rel="noreferrer noopener"> GitHub</a>
      </div>
    </div>
  </div>
</div>
</div>

 
  );
  
}

export default Projects;