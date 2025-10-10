import React from 'react';
import errorPageImg from '../assets/error-404.png';

const ErrorPage = () => {


    return (
        <div className="flex justify-center items-center min-h-screen">
            <img src={errorPageImg} alt="404 Page Not Found" className="max-w-full h-auto" />
        </div>

    );
};


export default ErrorPage;