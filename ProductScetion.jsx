import React from 'react';

// Correctly declare the images array
const images = [
    {
        image: "vite-project/src/images/suresh.jpg",
        title: "Hi I am Suresh Jangid, how are you enjoying your life?",
        description: "Life is good and happy because I am a web developer"
    }
];

const ProductScetion = () => {
    return (
        <>
            <div>
                <h1 className='text-48px flex items-center justify-center gap-4 leading-none tracking-tight font-bold text-gray-700 sm:text-3xl md:text-5xl lg:text-6xl pt-20 pb-1.5 xl:text-7xl'>
                    Product Section
                </h1>
                <p className='text-xl text-center mt-10 px-4 py-2 max-w-2xl mx-auto animate-bounce hover:animate-pulse transition-all duration-500 ease-in-out bg-white shadow-2xl border-2 border-amber-400 rounded-md'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt maxime voluptatibus harum assumenda pariatur delectus commodi?
                </p>
            </div>

            <div className='flex  flex-wrap justify-center items-center gap-10 hover:transform '> 

            <div className="container hover: transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-indigo-500  via-amber-500   shadow-amber-500  shadow-2xl border-amber-200 my-10 flex justify-center items-center w-100 h-100 flex-col gap-20 p-10 rounded-2xl">
                <div className="row">
                    {images.map((img, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img.image} alt={img.title} className="w-full h-auto rounded-lg" />
                                    <h3 className="text-lg font-bold mt-4">{img.title}</h3>
                                    <p className="mt-2">{img.description}</p>
                                    <div className="mt-4 space-x-2">
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                  <div className="container hover: transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-l from-blue-500 to-indigo-500  via-green-400  shadow-amber-500  shadow-2xl border-amber-200 my-10 flex justify-center items-center w-100 h-100 flex-col gap-20 p-10 rounded-2xl">
                <div className="row">
                    {images.map((img, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img.image} alt={img.title} className="w-full h-auto rounded-lg" />
                                    <h3 className="text-lg font-bold mt-4">{img.title}</h3>
                                    <p className="mt-2">{img.description}</p>
                                    <div className="mt-4 space-x-2">
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

                  <div className="container hover: transform hover:scale-110 transition duration-300 ease-in-out bg-gradient-to-r from-blue-500 to-indigo-500  via-red-600 shadow-amber-500 shadow-2xl border-amber-200 my-10 flex justify-center items-center w-100 h-100 flex-col gap-20 p-10 rounded-2xl">
                <div className="row">
                    {images.map((img, index) => (
                        <div className="col-12 col-md-4" key={index}>
                            <div className="card">
                                <div className="card-body">
                                    <img src={img.image} alt={img.title} className="w-full h-auto rounded-lg" />
                                    <h3 className="text-lg font-bold mt-4">{img.title}</h3>
                                    <p className="mt-2">{img.description}</p>
                                    <div className="mt-4 space-x-2">
                                        <button className='btn btn-primary'>Read More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            </div>

        </>
    );
}

export default ProductScetion;
