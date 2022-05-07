import React from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';
import LogoSubtite from '../../assets/images/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';


 const Sidebar = () => {
  return (
    <div className='nav-bar'>

        <Link to='/' className='logo'>
            <img src={LogoS} alt ='logo'/>
            <img className='sub-logo' src={LogoSubtite} alt ='logo'/>
        </Link>
      <div>
        Ninea
      </div>
      <div>
        Tornike
      </div>
      <nav>
        <NavLink exact={true} to='/' className='active'>
          <FontAwesomeIcon icon={faHome} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact={true} to='/about' className='active about-link'>
          <FontAwesomeIcon icon={faUser} color='#4d4d4e'/>
        </NavLink>
        <NavLink exact={true} to='/contact' className='active contact-link'>
          <FontAwesomeIcon icon={faEnvelope} color='#4d4d4e'/>
        </NavLink>        
      </nav>
    </div>
  )
}

export default Sidebar