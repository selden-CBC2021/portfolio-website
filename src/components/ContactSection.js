import React from "react";
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

const ContactStyles = styled.div`
  padding: 1.5rem;
  background-color: rgb(37, 34, 34);
  display: flex;
  align-items: center;
  gap: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  .icon {
    color: white;
    background-color: gray;
    padding: 1.3rem;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }
  svg {
    width: 1.5rem;
  }
  .info {
    color: white;
  }
`;

export default function ContactSection({
  icon = <MdEmail />,
  text = 'this is info',
  href = "",
}) {
  return (
    <ContactStyles>
      <div className="icon">{icon}</div>
      <div className="info">
      <a href={href} target="_blank" rel="noreferrer noopener">{text}</a>
      </div>
    </ContactStyles>
  
  )
};