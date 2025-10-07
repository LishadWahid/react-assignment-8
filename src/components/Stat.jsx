import React from 'react';

const Stat = () => {
    return (
        <div className="bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white py-15 px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10">
                Trusted By Millions, Built For You
            </h2>

            <div className="border-2 border-green-500 flex justify-around stats stats-vertical md:stats-horizontal w-full max-w-5xl mx-auto text-center bg-transparent">
                <div className="">
                    <div className="stat-title text-white">Total Downloads</div>
                    <div className="stat-value text-white text-6xl">29.6M</div>
                    <div className="stat-desc text-white/80">21% More Than Last Month</div>
                </div>

                <div className="">
                    <div className="stat-title text-white">Total Reviews</div>
                    <div className="stat-value text-white text-6xl">906K</div>
                    <div className="stat-desc text-white/80">46% More Than Last Month</div>
                </div>

                <div className="">
                    <div className="stat-title text-white">Active Apps</div>
                    <div className="stat-value text-white text-6xl">132+</div>
                    <div className="stat-desc text-white/80">31 More Will Launch</div>
                </div>
            </div>
        </div>

    );
};

export default Stat;