import React from "react";
import "./Projects.css";
import covid from '../assets/images/covidTracker1.jpg';
import weather from '../assets/images/weatherAppImg.jpg'
import fitness from '../assets/images/fitnessTracker.jpg'
import wds from '../assets/images/workDaySchedule.jpg';
import repost from '../assets/images/repostBlogSite.jpg'

function Projects() {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={repost} alt="" />
          </div>
          <h3>RePost</h3>
          <p>A simple blogging app. Tumblr clone that uses the model, view, controller (MVC) structure.</p>
          <div className="portfolio-item-cta">
            <a href="https://github.com/selden-CBC2021/rePost" className='btn' target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://repostproject.herokuapp.com/" className='btn btn-primary' target="_blank" rel="noreferrer noopener">View Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={covid} alt="" />
          </div>
          <h3>Covid Tracker</h3>
          <p>An app showing the global and U.S. covid cases/deaths using geo-location and Web-APIs for real-time data.</p>
          <div className="portfolio-item-cta">
            <a href="https://github.com/MXDragon/Covid19Risk-VaccineAssessment" className='btn' target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://mxdragon.github.io/Covid19Risk-VaccineAssessment/" className='btn btn-primary' target="_blank" rel="noreferrer noopener">View Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={wds} alt="" />
          </div>
          <h3>Work Day Scheduler</h3>
          <p>Simple app that that can track your working day. Utilizes local storage - saved data will be kept even after a page refresh.</p>
          <div className="portfolio-item-cta">
            <a href="https://github.com/selden-CBC2021/Daily-Event-Planner" className='btn' target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://selden-cbc2021.github.io/Daily-Event-Planner/" className='btn btn-primary' target="_blank" rel="noreferrer noopener">View Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={weather} alt="" />
          </div>
          <h3>Weather Dashboard</h3>
          <p>Weather app showing current conditions and 5-day forecast of any city in the US. Uses OpenWeather Api and utilizes local storage.</p>
          <div className="portfolio-item-cta">
            <a href="https://github.com/selden-CBC2021/Weather-Dashboard" className='btn' target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://selden-cbc2021.github.io/Weather-Dashboard/" className='btn btn-primary' target="_blank" rel="noreferrer noopener">View Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src={fitness} alt="" />
          </div>
          <h3>Fitness Tracker</h3>
          <p>This is a Node.js based app that uses MongoDB, Mongoose, the Node.js framework and Express to handle routes and middleware.</p>
          <div className="portfolio-item-cta">
            <a href="https://github.com/selden-CBC2021/NoSQL-Workout-Tracker" className='btn' target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://thawing-wave-27284.herokuapp.com/?id=614b8a8baf10840016248306" className='btn btn-primary' target="_blank" rel="noreferrer noopener">View Demo</a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item-image">
            <img src="https://via.placeholder.com/640x427.png?text=Coming+Soon" alt="" />
          </div>
          <h3>Full Stack E-Commerce App with Stripe</h3>
          <div className="portfolio-item-cta">
            <a href="https://github.com" className='btn' target="_blank" rel="noreferrer noopener">Github</a>
            <a href="https://github.com" className='btn btn-primary' target="_blank" rel="noreferrer noopener">View Demo</a>
          </div>
        </article>
        
      </div>
    </section>

/* <div>
<div className="container-fluid">
  <div className="text-center mt-4 mb-4" id="Work">
    <h1>Portfolio</h1>
  </div>
    <div className="row">
      <div className="col-md-6 mx-auto">
        <div className="card main-card border ml-4 mr-4">
          <img src={repost} className="mx-auto rounded img-fluid" alt="rePost Project"/>
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
          <img src={covid} className="card-img-top" alt="Covid19 risk assessment"/>
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
      <img src={weather} className="card-img-top" alt="Weather Dashboard"/>
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
      <img src={fitness} className="card-img-top" alt="Fitness tracker" />
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
      <img src={wds} className="card-img-top" alt="Event planner"/>
      <div className="card-body">
        <h5 className="card-title">Event Planner</h5>
        <p className="card-text">Simple app that that can track your working day</p>
        <a href="https://stark-reef-03061.herokuapp.com/" target="_blank" rel="noreferrer noopener">View  </a>
        <a href="https://github.com/selden-CBC2021/ExpressNoteTaker" target="_blank" rel="noreferrer noopener"> GitHub</a>
      </div>
    </div>
  </div>
</div>
</div> */
  );
}

export default Projects;