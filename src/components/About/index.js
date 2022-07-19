import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import ProgressBar from '../ProgressBar'

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
          <AnimatedLetters inputText={'About Me'} time={15} letterClass={letterClass}/>
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
          labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. 
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Interdum posuere lorem ipsum dolor sit amet consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Leo urna molestie at elementum eu facilisis. Nisl condimentum id venenatis a condimentum vitae sapien. In tellus integer feugiat scelerisque varius. Pretium quam vulputate dignissim suspendisse in est ante in. Tincidunt arcu non sodales neque sodales ut. Risus ultricies tristique nulla aliquet. Quam elementum pulvinar etiam non quam.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ultricies integer quis auctor elit sed vulputate mi. Interdum posuere lorem ipsum dolor sit amet consectetur. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Leo urna.
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
