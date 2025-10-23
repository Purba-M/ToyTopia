import React from 'react';
import Navbar from '../component/Navbar';
import { Outlet } from 'react-router';

const Authlayout = () => {
    return (
        <div className='bg-base-200 min-h-screen'>
            <header className='w-11/12 p-4 mx-auto'>
                <Navbar></Navbar>
            </header>

            <main>
                <Outlet>
                    
                </Outlet>
            </main>
        </div>
    );
};

export default Authlayout;