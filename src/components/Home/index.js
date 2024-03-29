import './index.scss'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import Ninea from '../../assets/images/Ninea.png'

const Home = () => {

    const [letterClass, setLetterClass] = useState('text-animate')


   useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
            console.log(letterClass)
        }, 4500)
   }, [])

    return (

        <div className='container home-page'>
            
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters letterClass={letterClass} inputText={
                        "Hey,\nI'm Ninèa!\nYour Web \nDeveloper"
                    } time={10}/>
                    
                </h1>

                <h2>React Developer | Programmer </h2>
                <Link to='/contact' className='flat-button'> CONTACT ME</Link>

            </div>

            <div className='portrait'>
                <img src={Ninea} alt="Ninèa"/>
            </div>
        </div>

    );
}

export default Home