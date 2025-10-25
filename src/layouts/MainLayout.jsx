import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <header >
                {import.meta.env.VITE_name}
              <nav className='container mx-auto px-4'><Navbar></Navbar></nav>
            </header>
            <main  className="flex-grow container mx-auto px-4 py-6">
            <Outlet></Outlet>
            </main>
            <footer>
            <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;