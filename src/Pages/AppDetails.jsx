import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import ratingImage from '../assets/icon-ratings.png'
import downloadImg from '../assets/icon-downloads.png';

const AppDetails = () => {
    const { id } = useParams();
    const { products, loading } = useProducts();
    const product = products.find(p => String(p.id) === id);
    console.log(product);
    if (loading) return <p>Loading...</p>
    const { image, size, ratingAvg } = product || {}

    const handleAddToAppDetails = () =>{

        const existingList = JSON.parse(localStorage.getItem("installation"));
        let updateList = [];
        if(existingList){
            const isDuplicate = existingList.find(p=> p.id === product.id)
            if(isDuplicate) return alert('No App Found')
            updateList = [...existingList, product];
        }else{
            updateList.push(product)
        }
        localStorage.setItem("installation", JSON.stringify(updateList))
    }
    return (
        <div className="rounded-xl bg-base-100 w-96 shadow-sm pt-8 cursor-pointer"  onClick={handleAddToAppDetails}>
            <figure>
                <img className="w-[335px] h-[310px] rounded-2xl mx-auto"
                    src={image} />
            </figure>
            <div className="card-body">
                <div className="flex justify-between">
                    <div className="text-xl flex items-center gap-2"><span><img className="w-[16px] h-[16px] cursor-pointer" src={downloadImg} alt="" /></span>{size}</div>
                    <div className="text-xl flex items-center gap-2"><span><img className="w-[16px] h-[16px]" src={ratingImage} alt="" /></span>{ratingAvg}</div>
                </div>
            </div>
        </div>       
    );
};

export default AppDetails;