import React from 'react';
import { Link} from 'react-router';
import ProductCard from '../components/ProductCard';
import Banner from '../components/Banner';
import Stat from '../components/Stat';
import useProducts from '../Hooks/useProducts';

const Home = () => {

    const { products, loading, error } = useProducts();
    const featuredProducts = products.slice(0, 8);
    // console.log(products);

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Banner />
                <Stat />
            </div>
            <div className="max-w-[1600px] mx-auto px-2">
                <h1 className="text-5xl font-black flex justify-center pt-8 pb-3">Trending Apps</h1>
                <p className="text-xl flex justify-center py-3">Explore All Trending Apps on the Market developed by us</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-5">
                    {
                        featuredProducts.map(product => <ProductCard key={product.id} product={product}></ProductCard>)
                    }
                </div>
                <div className="flex justify-center my-8">
                    <Link to="/apps" className="btn px-10 py-3 bg-gradient-to-r from-[#632ee3] to-[#9f62f2] text-white border-none hover:opacity-90">Show All</Link>
                </div>
            </div>
        </>
    );
};

export default Home;