import React from 'react';

const SecondBanner = () => {
    return (
        <>
            <div className='bg-gradient-to-r flex flex-col md:flex-row justify-between items-center w-full pt-10 pb-9 h-auto md:h-screen rounded-2xl from-indigo-700 via-purple-800 to-pink-600'>
                <div className='container mx-auto p-5 md:w-1/2 text-2xl text-center mt-10 mb-10'>
                    <div className="font-semibold text-center">
                        <h2 className='text-red-500'>
                            Hello Developers <span className='text-amber-400 text-2xl cursor-pointer font-bold font-mono'>Welcome</span> to our website !!
                        </h2>
                        <p className='text-green-400 text-xl mt-4 font-bold font-mono'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                            <span className='text-emerald-900 font-bold font-mono'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</span>
                            <span className='text-amber-400 font-mono font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.
                            <span className='text-red-400 font-mono font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</span>
                        </p>
                    </div>
                </div>
                <div className='container mx-auto p-5 md:w-1/2 text-2xl text-center mt-10 mb-10'>
                    <div className="font-semibold text-center">
                        <h2 className='text-red-500'>
                            HI I AM SURESH JANGID !! <span className='text-amber-400 text-2xl cursor-pointer font-bold font-mono'>THIS IS MY FIRST PROJECT IN REACT JS</span> ENJOY IT !!
                        </h2>
                        <div className="text-2xl mt-4 text-shadow-black shadow-2xl hover:skew-y-12 transform transition duration-300 ease-in-out rounded-2xl from-indigo-700 via-purple-800 to-pink-600">
                            <h1>
                                Created by <span className='text-amber-400 text-2xl pb-7 cursor-pointer font-bold font-mono'>SURESH JANGID !!</span>
                            </h1>
                            <p className='text-green-400 text-xl mt-4 font-bold font-mono'>
                                I will be happy if you like this project and give me a follow on my Instagram page <span>Instagram account:</span>
                                <a href="https://www.instagram.com/surya_01_7/" rel="noreferrer" target="_blank" className="text-blue-500 underline">SURYA_01_7</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SecondBanner;
