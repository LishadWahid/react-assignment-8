import React from 'react';
import logoImage from '../assets/logo.png'
const LoadingSpinner = () => {
    return (
        <div className="flex justify-center items-center bg-white">
            <h1 className="text-7xl flex items-center gap-4">
                <span>
                    <img
                        className="w-[80px] h-auto animate-spin"
                        src={logoImage}
                        alt="Logo"
                    />
                </span>
                Loading
            </h1>
        </div>
    );
};

export default LoadingSpinner;