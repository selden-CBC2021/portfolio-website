import React from "react";
import PIC from "../assets/images/index";
import "./about.css"

function About() {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is </h2>
          <h1 className="i-name"> Drew Selden</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Web Developer</div>
              <div className="i-title-item">Quick Learner</div>
              <div className="i-title-item">Adaptable</div>
              <div className="i-title-item">Group or Solo setting</div>
            </div>
          </div>
          <p className="i-desc">
          Greetings! I am a Full-Stack Web Developer skilled in HTML, CSS, and JavaScript. I possess a knowledge of various frameworks and tools that are used in today's software engineering and technology. I am also a Michigan State University alumni with a bachelor's degree in Human Biology and Criminal Justice.
          </p>
          <p className="i-desc">
          On a more personal note I am a quick learner, adapt in nearly any situation, and can help solve problems with critical thinking skills and an eye for detail. I excel at planning and data analysis while usually being able to see the big picture before it's been made clear.
          </p>
          <p className="i-skillslist">Here is a list of my current technical skills.</p>
            <ul className="i-skills list-inline">
              <li>
                <img src={PIC.html} alt="HTML5" title="HTML5"/>
              </li>
              <li>
                <img src={PIC.css} alt="css3" title="css3"/>
              </li>
              <li>
                <img src={PIC.javascript} alt="javascript" title="javascript"/>
              </li>
              <li>
                <img src={PIC.graphql} alt="graphql" title="graphql"/>
              </li>
              <li>
                <img src={PIC.mongodb} alt="mongodb" title="mongodb"/>
              </li>
              <li>
                <img src={PIC.nodejs} alt="node-js" title="node-js"/>
              </li>
              <li>
                <img src={PIC.react} alt="react-js" title="react-js"/>
              </li>
              <li>
                <img src={PIC.git} alt="git" title="git"/>
              </li>
            </ul>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={PIC.drewProfile} alt="" className="i-img rounded-circle" />
        
      </div>
    </div>
  )
};
export default About;