import './index.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['I',"'",'m',' ','N','i','n','e','a'];
    const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]
   
//   useEffect ( () => {
//       return setTimeout(() => {
//       setLetterClass('text-animate-hover')},4000)
//     }, [])

    return (

        <div className='container home-page'>
            
            <div className='text-zone'>
                <h1><AnimatedLetters letterClass={letterClass} strArray={['H','i',',']} index={12}/> 
                    <br/> 
                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} index={15}/>
                    <br/> 
                    <AnimatedLetters letterClass={letterClass} strArray={jobArray} index={25}/>
                </h1>

                <h2>React Developer | Programmer </h2>
                <Link to='/contact' className='flat-button'> CONTACT ME</Link>

            </div>
        </div>

    );
}

export default Home