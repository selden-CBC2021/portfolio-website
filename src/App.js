import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import About from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
          <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            expand="sm"
            collapseOnSelect
          >
            <Navbar.Toggle />
            <Navbar.Collapse className="d-flex justify-content-center ">
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
                <Nav.Link as={Link} to="/Resume">
                  Resume
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/About" element={<About/>} exact />
            <Route path="/Projects" element={<Projects/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Resume" element={<Resume/>} />
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
    );
}

export default App;