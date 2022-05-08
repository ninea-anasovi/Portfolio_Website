import React from 'react';
import './index.scss'
import Sidebar from '../Sidebar'
import { Outlet } from 'react-router-dom';


const Layout = () => {
    return (
    <>
    <Sidebar/>
    
    <div className='page'>
        <span className='tags top-tags'>body</span>

        <Outlet/>

        <span className='tags bottom-tags'> body
        <br/>
        <span className='bottom-tag-html'>html</span>
        </span>

    </div>

    </>);
}

export  default Layout