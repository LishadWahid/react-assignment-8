import React from 'react';
import logoImage from '../assets/logo.png'
import githubImage from '../assets/github.png'
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 px-15 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/apps">Apps</NavLink></li>
                        <li><NavLink to="/installation">Installation</NavLink></li>
                    </ul>
                </div>
                <Link to="/" className="btn-ghost flex items-center gap-2"><span><img className='w-[40px] h-[40px]' src={logoImage} alt="" /></span>HERO.IO</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/apps">Apps</NavLink></li>
                    <li><NavLink to="/installation">Installation</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href="https://github.com/LishadWahid" target="_blank" rel="noopener noreferrer" className="btn bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none hover:opacity-90"><span><img src={githubImage} alt="" /></span>Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;