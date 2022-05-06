import React from "react";
import ContactSection from "../components/ContactSection";
import { MdEmail } from 'react-icons/md'
import { GoMarkGithub } from 'react-icons/go'
import { FaLinkedin } from 'react-icons/fa'
import './contact.css'
import styled from "styled-components";
import SectionTitle from "../components/SectionTitle"
import ContactForm from "../components/ContactForm";


const ContactSectionStyle = styled.div`
padding: 5rem 0;
.contact-wrapper {
  display: flex;
  gap: 5rem;
  margin-top: 7rem;
  justify-content: space-between;
  position: relative;
}
.contact-wrapper::after {
  position: absolute;
  content: '';
  width: 2px;
  height: 50%;
  background-color: lightgray;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -50%)
}
.left{
  width: 100%;
  max-width: 500px;
}
.right{
  max-width: 500px;
  width: 100%;
}
@media only screen and (max-width: 768px) {
  .contact-wrapper {
    flex-direction: column;
  }
  .contact-wrapper::after {
    display: none;
  }
  .left,
  .right {
    max-width: 100%;
  }
  .right {
    padding: 4rem 2rem 2rem 2rem;
  }
}
  

`
function Contact() {
  return (
    <ContactSectionStyle>
      <div className="container">
        <SectionTitle heading="contact" 
        subheading="Get in touch"/>
        <div className="contact-wrapper">
          <div className="left">
              <ContactSection icon={<MdEmail />} text= "seldend1@gmail.com"   />
              <ContactSection icon={<GoMarkGithub />}  text="Github" href="https://github.com/selden-CBC2021" />
              <ContactSection icon={<FaLinkedin />} text="LinkedIn" href="https://www.linkedin.com/in/drew-selden/"/>
          </div>
          <div className="right">
            <ContactForm />
          </div>
        </div>
      </div>
    </ContactSectionStyle>
  );
}


export default Contact;


    // <a href="https://github.com/selden-CBC2021/" target="_blank" rel="noreferrer noopener">Github</a>
    //           <br/>

    //           <a href="https://www.linkedin.com/in/drew-selden/" target="_blank" rel="noreferrer noopener">LinkedIn</a>
    //           <br/>
              