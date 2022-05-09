import './index.scss'
import React from 'react'

function AnimatedLetters({letterClass, inputText, time}) {

  const lines = inputText.split('\n');
  var stringArray, numberOfChars = 0;
   
  return (
    <span>
      {
        lines.map(line => {
          stringArray = line.split('');
          
          return (
            <>
              {
                stringArray.map( char => {
                  numberOfChars++;
                  
                  return (
                    <span key={char+ numberOfChars} className={`${letterClass} _${time + numberOfChars}`}>
                      {char}
                    </span>
                  ) 
                })
              }
              <br/>
            </>
          )
        })
      }
    </span>
  )
}

export default AnimatedLetters