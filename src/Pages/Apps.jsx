import React, { useEffect, useState } from 'react';
import useProducts from '../Hooks/useProducts';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Apps = () => {
    const { products } = useProducts();

    const [search, setSearch] = useState('');
    const [searchedProducts, setSearchedProducts] = useState(products);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const term = search.trim().toLocaleLowerCase();

        setLoading(true);
        const delay = setTimeout(() => {
            if (term) {
                const filtered = products.filter(product =>
                    product.title.toLocaleLowerCase().includes(term)
                );
                setSearchedProducts(filtered);
            } else {
                setSearchedProducts(products);
            }

            setLoading(false);
        }, 400);
        return () => clearTimeout(delay);
    }, [search, products]);

    // const term = search.trim().toLocaleLowerCase();
    // const searchedProducts = term ?
    //     products.filter(product => product.title.toLocaleLowerCase().includes(term)) : products


    return (
        <div className="max-w-[1600px] mx-auto px-2">
            <div className="pt-8">
                <h1 className="text-5xl font-black flex justify-center pt-8 pb-3">Our All Applications</h1>
                <p className="text-xl flex justify-center py-3">Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>
            <div className="flex justify-between py-3">
                <h2 className="font-semibold text-2xl">Apps Found ({searchedProducts.length})</h2>
                <label className="input">
                    <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search" />
                </label>
            </div>
            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <LoadingSpinner />
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-3">
                    {searchedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Apps;