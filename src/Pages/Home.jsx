import React from 'react';
import { useLoaderData } from 'react-router';
import ProductCard from '../components/ProductCard';

const Home = () => {

    const products = useLoaderData();
    // console.log(products);

    return (
        <div className="max-w-[1600px] mx-auto px-2 py-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {
                    products.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Home;