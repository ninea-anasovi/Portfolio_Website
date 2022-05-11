import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'

export default function About() {

  const [letterClass, setLetterClass] = useState('text-animate')


   useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log(letterClass)
        }, 2500)
   }, [])

  return (
    <div className='container about-page'>
      <div className='text-zone'>

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
    </div>
  )
}
