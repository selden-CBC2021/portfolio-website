import React from 'react';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/Aboutme";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navigation from './components/Navigation';
import Footer from "./pages/Footer";
import './index.css';

const App = () => {
    return (
        <BrowserRouter>
        <div className="App">
          <Navigation/>
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