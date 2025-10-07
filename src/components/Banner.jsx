import React from 'react';
import playStoreImg from '../assets/playstore.png';
import appStoreImg from '../assets/appstore.png'
import heroImage from '../assets/hero.png'

const Banner = () => {
    return (
        <div className="max-w-[1600px] h-[820px] mx-auto mt-15">
            <div className="flex justify-center">
                <h1 className="font-bold text-7xl text-center">We Build <br /><span className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">Productive</span> Apps</h1>
            </div>
            <p className="font-normal text-xl text-center w-[1000px] px-3 pt-6">At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="flex gap-5 mt-8 items-center justify-center">
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img className="pr-2" src={playStoreImg} /> Responsive</button>
                <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl"><img className="pr-2" src={appStoreImg}/> Responsive</button>
            </div>
            <img className="mt-8" src={heroImage} />
        </div>
    );
};

export default Banner;