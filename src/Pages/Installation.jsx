import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';

const Installation = () => {

    const [installation, setInstallation] = useState([]);
    const [sortOrder, setSortOrder] = useState('none');

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if (savedList) setInstallation(savedList)
    }, []);

    const handleRemove = (id) => {
        const existingList = JSON.parse(localStorage.getItem("installation"));
        let updateList = existingList.filter(p => p.id !== id);
        setInstallation(updateList);
        localStorage.setItem('installation', JSON.stringify(updateList));
        toast.warn("App uninstalled successfully!");
    }

    const sortedItem = (() => {
        if (sortOrder === 'size-asc') {
            return [...installation].sort((a, b) => {
                const sizeA = parseFloat(a.size);
                const sizeB = parseFloat(b.size);
                return sizeA - sizeB;
            });
        } else if (sortOrder === 'size-dsc') {
            return [...installation].sort((a, b) => {
                const sizeA = parseFloat(a.size);
                const sizeB = parseFloat(b.size);
                return sizeB - sizeA;
            })
        } else {
            return installation;
        }
    })();

    return (
        <div className="my-5">
            <div className="max-w-3/6 mx-auto flex justify-between py-10 items-center">
                <h1 className="text-3xl font-semibold"><span className="text-lg text-gray-500">({sortedItem.length}) Products Found</span></h1>
                <select className="btn text-lg "
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}>
                    <option value="none">Sort By Size</option>
                    <option value="size-asc">Ascending</option>
                    <option value="size-dsc">Decending</option>
                </select>
            </div>
            <div className="space-y-3">
                {
                    sortedItem.map(p => <div className="border border-gray-300 max-w-3/6 mx-auto flex items-center justify-between bg-white p-3 shadow-sm rounded-lg">
                        <div className="flex items-center space-x-3">
                            <img
                                src={p.image}
                                alt={p.companyName}
                                className="w-[70px] h-[70px] rounded-md object-cover"
                            />
                            <div>
                                <h2 className="text-xl font-semibold ">{p.companyName}</h2>
                                <p className="tex-md">{p.size} ⭐ {p.ratingAvg}</p>
                            </div>
                        </div>


                        <button onClick={() => handleRemove(p.id)} className="text-lg bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
                            Uninstall
                        </button> 
                    </div>
                    ) 
                }
                <ToastContainer position="top-right" autoClose={2000} />
            </div>

        </div>
    );
};

export default Installation;