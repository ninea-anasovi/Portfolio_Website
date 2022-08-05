import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ProgressBar from '../ProgressBar'
import Ninea from '../../assets/images/ninea.jpg'

export default function About() {

  const [letterClass, setLetterClass] = useState('text-animate')


   useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log(letterClass)
        }, 2500)
   }, [])

  return ( 

    <div className='container about-page flex-container'>
      
      <div className='text-zone flex-left'>

        <h1>
          <AnimatedLetters inputText={'About Me'} time={5} letterClass={letterClass}/>
        </h1>
        <p>
         As a chilt I was absolutely passionate about 2 things: playing with Visuals (Drawing, Photographing, Digital Art) and Technical Problem Solving (Math, physics) as I grew up I decided that my profession should be Connected to my technical side and settled to Study Electrical and Computer Engineering but never stopped developing my art side. 
        </p>

        <p>
          Electrical and Computer Engineering in Agricultural University of Georgia gave me solid knowledge of Hardware technologies from PCB designing to Hardware (programming microcontrollers and controllers) and Software Programming.
        </p>

        <p>
          Alongside I learned Graphic Design to not give up my drawing skills and enhance, than I realized that what could bring both Together and let me to fully develop both of my sides would be Frontend Development and started learning that with solid knowledge of other programming languages like - C++, Python and little bit of Assembler, which helped me a lot. And my learning Journey was more of a fun opportunity to draw with a code.
        </p>

        <p>
          Now as a web-developer I know JavaScript and React alongside markup languages: HTML5, CSS and Sass. And this is not the end of my list as I am Open to learn more and always amplify my knowledge.
        </p>
      </div>

      <div className='skill-bars flex-right'>
        <p className='skill-lable'>React</p>
        <ProgressBar done="70"/>
        <p className='skill-lable'>HTML</p>
        <ProgressBar done="100"/>
        <p className='skill-lable'>CSS</p>
        <ProgressBar done="95"/>
        <p className='skill-lable'>C++</p>
        <ProgressBar done="100"/>
        <p className='skill-lable'>Python</p>
        <ProgressBar done="70"/>
      </div>
    </div>
  )
}
