import React, {useState, useEffect, useRef} from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import emailjs from '@emailjs/browser';



function Contact() {

  const [letterClass, setLetterClass] = useState('text-animate')
  const [sentMessage, setSentMessage] = useState('')
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9m98s98', 'template_ze1l3n8', form.current, 'RHUmOuNAcJX6Uoxyw')
      .then((result) => {
        setSentMessage('Sent Succesfully')
      }, (error) => {
        setSentMessage('Oops, There was an error, please try again later!' + error.text)
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
          Hey, if you need colorful websites with fancy animations for your business or personal portfolio just let me know with this form and I will get back to you as soon as possible. 
        </p>

        <div className='contact-form'>
          <form onSubmit={sendEmail} ref={form}>
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
              <p>{sentMessage}</p>             
            </ul>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

