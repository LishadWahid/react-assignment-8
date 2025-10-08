import React from 'react';
import { Link } from 'react-router';
import ratingImage from '../assets/icon-ratings.png'
import downloadImg from '../assets/icon-downloads.png';

const ProductCard = ({ product }) => {
    const {image, title, size, ratingAvg, id} = product;
    return (
        <Link to={`/app/${id}`} className="card bg-base-100 w-full shadow-md hover:shadow-xl hover:scale-105 transition ease-in-out duration-300">
            <figure className="h-48 overflow-hidden">
                <img
                    src={image} alt={title}
          className="rounded-t-xl w-full h-full object-cover p-5" />
            </figure>
            <div className="card-body items-start text-left p-4">
                <h2 className="card-title text-base sm:text-lg font-semibold">
                    Time Planner: {title}
                </h2>
                <div className="card-actions justify-between w-full mt-4">
                    <h2 className="badge sm:text-sm "><span><img className="w-[16px] h-[16px] cursor-pointer" src={downloadImg} alt="" /></span>{size}</h2>
                    <h2 className="badge sm:text-sm"><span><img className="w-[16px] h-[16px]" src={ratingImage} alt="" /></span>{ratingAvg}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;