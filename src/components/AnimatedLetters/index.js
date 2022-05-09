import './index.scss'
import React from 'react'

function AnimatedLetters({letterClass, strArray, index}) {
  {console.log(letterClass)}
  return (
    <span>
      
        {
            strArray.map( (char,i)=>(
                <span key={char+i} className={`${letterClass} _${i + index}`}>
                    {char}
                    {console.log(`${letterClass} _${i + index}`)}
                </span>
            ))
        }
    </span>
  )
}

export default AnimatedLetters