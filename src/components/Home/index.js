import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (

        <div className='container home-page'>
            <div className='text-zone'>
                <h1>Hi, <br/> I'm
                Ninea <br/> Web Developer</h1>
                <h2>React Developer | Programmer </h2>
                <Link to='/contact'> CONTACT ME</Link>

            </div>
        </div>

    );
}

export default Home