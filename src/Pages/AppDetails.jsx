import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../Hooks/useProducts';
import ratingImage from '../assets/icon-ratings.png'
import downloadImg from '../assets/icon-downloads.png';
import iconReviewImg from '../assets/icon-review.png';
import Charts from './Charts';
// import appErrorImg from '../assets/App-Error.png';

const AppDetails = () => {
    const { id } = useParams();
    const { products, loading } = useProducts();
    const product = products.find(p => String(p.id) === id);
    console.log(product);
    if (loading) return <p>Loading...</p>
    const { image, size, ratingAvg, description } = product || {}

    const handleAddToAppDetails = () => {

        const existingList = JSON.parse(localStorage.getItem("installation"));
        let updateList = [];
        if (existingList) {
            const isDuplicate = existingList.find(p => p.id === product.id)
            if (isDuplicate) return alert ("No Apps Found")
            updateList = [...existingList, product];
        } else {
            updateList.push(product)
        }
        localStorage.setItem("installation", JSON.stringify(updateList))
    }
    return (
        <>
            <div class="max-w-[1440px] mx-auto bg-white rounded-lg shadow p-3 flex items-center gap-15">

                <div>
                    <img src={image} alt="icon" className="w-[300px] h-[300px] rounded-md object-cover" />
                </div>


                <div class="max-w-[1050px] h-auto flex-1">
                    <h3 class="text-4xl font-bold pb-1">SmPlan: ToDo List With Reminder</h3>
                    <p class="font-bold text-sm text-gray-500 border-b border-gray-300 pb-4">
                        Developed by <a href="#" class="text-indigo-600 hover:underline">productive.io</a>
                    </p>

                    <div class="mt-2 flex justify-start gap-15 items-center text-xs py-3">
                        <div className="flex flex-col">
                            <img className="w-[40px] h-[40px] pb-1" src={downloadImg} alt="" />
                            <h4>Downloads</h4>
                            <h2 className="font-extrabold text-3xl pb-2">{size}</h2>
                        </div>
                        <div className="flex flex-col">
                            <img className="w-[40px] h-[40px] pb-1" src={ratingImage} alt="" />
                            <h4>Downloads</h4>
                            <h2 className="font-extrabold text-3xl pb-2">{ratingAvg}</h2>
                        </div>
                        <div className="flex flex-col">
                            <img className="w-[40px] h-[40px] pb-1" src={iconReviewImg} alt="" />
                            <h4>Downloads</h4>
                            <h2 className="font-extrabold text-3xl pb-2">54K</h2>
                        </div>
                    </div>
                    <button onClick={handleAddToAppDetails} class="bg-green-500 h-[30px] text-white text-xs px-3 py-1 rounded-md hover:bg-[#00d390] cursor-pointer">
                        Install Now (291 MB)
                    </button>
                </div>
            </div>
            <div className="pt-6 mb-4 max-w-[1440px] mx-auto">
                <Charts/>
            </div>
            <div className="max-w-[1440px] mx-auto">
                <h2 className="pb-3 font-semibold text-2xl">Description</h2>
                <p className="font-normal text-justify pb-5 text-[#627382] ">{description} <br /> <br /> {description} <br /> <br /> {description}</p>
            </div>
        </>
    );
};

export default AppDetails;