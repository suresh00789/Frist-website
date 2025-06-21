import React from 'react';

const CatogorySection = () => {
    return (
        <>
            <div>
                <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex items-center justify-center gap-4 leading-none tracking-tight font-bold text-gray-700 pt-20 pb-1.5'>
                    Category Section
                </h1>
            </div>
            <div className="container mx-auto flex justify-center items-center py-20 px-4 sm:px-6 lg:px-8">
                <div className="bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 border-amber-200 my-10 flex justify-center items-center w-full max-w-4xl flex-col gap-10 p-10 rounded-2xl shadow-lg hover:shadow-2xl transform transition duration-500 ease-in-out">
                    <div className="bg-amber-50 flex justify-center items-center gap-10 flex-col text-center transform transition duration-300 ease-in-out rounded-2xl bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 hover:bg-gradient-to-l from-red-400 via-gray-500 to-blue-500">
                        <div className="w-full md:w-3/4 lg:w-1/2 ">
                            <div className="card ">
                                    <h1 className="text-lg font-mono font-bold mt-4 text-blue-800">This is a portfolio => ></h1>
                                    <p className="mt-2 font-mono text-lg md:text-xl">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, exercitationem magnam rerum accusamus illo illum, placeat dignissimos obcaecati quibusdam nam error ea omnis nobis quia enim? Nobis nisi est sit fugiat nam quasi voluptatibus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam rem autem reprehenderit? Ullam molestiae eligendi id quibusdam quae? Laborum magnam voluptatibus veritatis ex aliquid animi dolorem facilis cum? Dolore similique odio tenetur quam <span className="text-red-400 font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, non!</span>
                                    </p>
                                    <div className="mt-4 space-x-2">
                                        <button className='btn btn-primary hover:text-shadow-2xs font-mono hover:translate-1/6 transform transition duration-300 ease-in-out text-red-600'>
                                            Read More
                                        </button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CatogorySection;
