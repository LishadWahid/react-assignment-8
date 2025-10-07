import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import Banner from '../components/Banner';
import Stat from '../components/Stat';

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
            <Banner/>
            <Stat/>
            <div className="flex-1">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;