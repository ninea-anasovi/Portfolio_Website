import React, {useState, useEffect, useRef} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser';



function Contact() {

  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9m98s98', 'template_ze1l3n8', form.current, 'RHUmOuNAcJX6Uoxyw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log(letterClass)
        }, 2700)
  }, [])

  return (
    <div className='container contact-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} inputText={'Contact Me'} time={5} />
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. 
        </p>

        <div className='contact-form'>
          <form onSubmit={sendEmail}>
            <ul>
              <li className='half'>
                <input type='text' name='name' placeholder='Name' required/>
              </li>
              <li className='half'>
                <input type='email' name='email' placeholder='Email' required/>
              </li>
              <li>
                <input type='text' name='subject' placeholder='Subject' required/>
              </li>
              <li>
                <textarea name='message' placeholder='Message' required/>
              </li>
              <li >
                <input  type='submit' className='flat-button' value='SEND' />
              </li>              
            </ul>
          </form>
        </div>

        <Loader type="pacman"/>

      </div>

    </div>
  )
}

export default Contact

