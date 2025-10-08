import React from 'react';

const ProductCard = ({ product }) => {
    const {image, title, size, ratingAvg} = product;
    return (
        <div className="card bg-base-100 w-full shadow-md hover:shadow-xl transition-shadow duration-300">
            <figure className="px-4 pt-4">
                <img
                    src={image} alt={title}
          className="rounded-xl w-full h-48 object-cover" />
            </figure>
            <div className="card-body items-start text-left">
                <h2 className="card-title text-lg font-semibold">
                    Time Planner: {title}
                </h2>
                <div className="card-actions justify-between w-full mt-4">
                    <div className="badge">{size}</div>
                    <div className="badge">{ratingAvg}</div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;