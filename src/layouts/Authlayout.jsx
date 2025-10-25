import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet, useRouteError } from 'react-router';
import Footer from '../component/Footer';
import ErrorPage from '../pages/ErrorPage';
import LogIn from '../pages/LogIn';
import Register from '../pages/Register';

const Authlayout = () => {
    
    return (
        <div className='bg-base-200 min-h-screen'>
          
       <Outlet><LogIn>

       </LogIn>
       <Register>
        </Register></Outlet>

           
        </div>
    );
};

export default Authlayout;