import React, { useState } from 'react'
import styled from 'styled-components';
import '../index.css'

const FormStyles = styled.form`
  width: 100%;
  .form-group{
     margin-bottom: 2rem;
     width: 100%;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
      width: 100%;
      font-size: 1rem;
      padding: 1rem;
      background-color: lightgray;
      color: rgb(32, 32, 32);
      outline: none;
      border: none;
      border-radius: 8px;
      margin-top: 1rem;
      
  }
  textarea{
      min-height: 200px;
      resize: vertical;
  }
  .btn {
    width: max-content;
    display: inline-block;
    background: var(--color-bg);
    color: var(--color-primary);
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    text: var(--color-primary);
    cursor: pointer;
    border: 1px solid var(--color-primary);
    transition: var(--transition);
}
.btn:hover {
  background: var(--color-white);
  color: var(--color-bg);
  border-color: transparent;
}
.btn-primary {
  background: var(--color-primary);
  color: var(--color-bg);
}

`

export default function ContactForm() {
  const[name, setName ] = useState('');
  const[email, setEmail ] = useState('');
  const[message, setMessage ] = useState('');
  return (
    <div>
      <FormStyles>
        <div className='form-group'>
          <label htmlFor='name'>Your name
            <input type="text" id="name" name="name" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
    
      
        <div className='form-group'>
          <label htmlFor='email'>Your email
            <input type="text" id="email" email="email" value={email} onChange={e => setEmail(e.target.value)} />
          </label>
        </div>
      
      
        <div className='form-group'>
          <label htmlFor='message'>Your message
            <textarea id="message"  type="text" value={message} onChange={e => setMessage(e.target.value)}
             />
          </label>
        </div>
        <button className="btn" type="submit"><strong>Send</strong></button>
      </FormStyles>
    </div>
  )
}
