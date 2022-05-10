import React from 'react';
import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
    <>
    
    <Sidebar/>
    
    <div className='page'>

        <Outlet/>

    </div>

    </>);
}

export  default Layout