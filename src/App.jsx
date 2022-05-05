import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import Footer from "./pages/Footer";
import './index.css';

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
          <Navbar className="d-flex navbar-custom"
            bg="var(--color-bg)"
            variant="dark"
            expand="sm"
            collapseOnSelect
          >
            <Navbar.Toggle />
            <Navbar.Collapse className="d-flex  justify-content-center ">
              <Nav  >
                <Nav.Link as={Link} to="/About">
                  About
                </Nav.Link>
                <Nav.Link as={Link} to="/Projects">
                  Projects
                </Nav.Link>
                <Nav.Link as={Link} to="/Contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/portfolio-website" element={<About/>} />  
            <Route path="/About" element={<About/>}  />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    );
}

export default App;