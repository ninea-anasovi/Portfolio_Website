import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtite from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBehance, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


 const Sidebar = () => {
  return (
    <div className='nav-bar'>

        <Link to='/' className='logo'>
          <h3>
            Ninèa
          </h3>
        </Link>

      <nav>

        <NavLink exact="true" to='/' className='active'>
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink exact="true" to='/about' className='active' className='about-link'>
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink exact="true" to='/contact' className='active' className='contact-link'>
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul>
          <li>
            <a href='https://www.linkedin.com/in/ninéa/'> <FontAwesomeIcon icon={faLinkedin}/> </a>
          </li>
          <li>
            <a href='https://github.com/ninea-anasovi'> <FontAwesomeIcon icon={faGithub}/> </a>
          </li>
          <li>
            <a href='https://www.behance.net/ninea?tracking_source=search_users%7Cninea%20anasov'><FontAwesomeIcon icon={faBehance}/> </a>
          </li>
      </ul>
    </div>
  )
}

export default Sidebar