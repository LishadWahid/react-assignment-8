import React, { useEffect, useState } from 'react';

const Installation = () => {

    const [installation, setInstallation] = useState([]);

    useEffect(() => {
        const savedList = JSON.parse(localStorage.getItem('installation'))
        if (savedList) setInstallation(savedList)
    }, [])

    return (
        <div className="space-y-6">
            <div className="max-w-3/6 mx-auto flex justify-between py-5 items-center">
                <h1 className="text-3xl font-semibold"><span className="text-sm text-gray-500">({installation.length}) Products Found</span></h1>
                <button>Sort By Size</button>
            </div>
            <div className="space-y-3">
                {
                    installation.map(p => <div class="max-w-3/6 mx-auto flex items-center justify-between bg-white p-3 shadow-sm">
                        <div class="flex items-center space-x-3">
                            <img
                                src={p.image}
                                alt="App Icon"
                                class="w-10 h-10 rounded-md object-cover"
                            />
                            <div>
                                <h2 class="text-sm font-semibold ">Forest: Focus For Productivity</h2>
                                <p class="">9M ⭐ 5 • 258 MB</p>
                            </div>
                        </div>


                        <button class="text-xs bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">
                            Uninstall
                        </button>
                    </div>
                    )
                }
            </div>

        </div>
    );
};

export default Installation;