import React from 'react'
import AnimatedLetters from '../AnimatedLetters'

function Contact() {
  return (
    <div className='container'>
      <h1>
        <AnimatedLetters letterClass={'text-animate-hover'} inputText={'Contact Me'} index={10} />
      </h1>
    </div>
  )
}

export default Contact