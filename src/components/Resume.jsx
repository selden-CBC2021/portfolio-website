import React from "react";
import { Link } from "react-router-dom";
import '../pages/about.css'



function Resume() {
  return (
    <div className="cta">
      <a href="https://docs.google.com/document/d/1jlfe0lPUEjKHdH3wVmxB_4BGVTTZSwdus2Fu3DIADHk/edit?usp=sharing" target="_blank" rel="noreferrer noopener" className="btn">View Resume</a>
      <Link to="/Contact" className="btn btn-primary">Get In Touch</Link>
    </div>
    
  );
}

export default Resume




