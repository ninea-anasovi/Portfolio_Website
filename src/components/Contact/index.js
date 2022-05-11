import React, {useState, useEffect} from 'react'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Contact() {

  const [letterClass, setLetterClass] = useState('text-animate')


  useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log(letterClass)
        }, 2000)
  }, [])

  return (
    <div className='container about-page'>
      <div className='text-zone'>
        <h1>
          <AnimatedLetters letterClass={letterClass} inputText={'Contact Me'} index={15} />
        </h1>

        <form>
          
        </form>
      </div>

    </div>
  )
}

export default Contact