import React, { useEffect, useState } from 'react';

const SmallBoxes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div>
        <h1 className='text-3xl font-bold text-center text-gray-700 mb-8 flex justify-center items-center pt-20 font-mono'>
          !!
          <span className='text-amber-400 text-3xl cursor-pointer animate-bounce transform transition duration-300 ease-in-out hover:scale-110 font-bold font-mono'>
            Just Click On The Box
          </span>
          !!
        </h1>
      </div>
      <div className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'} gap-x-4 gap-y-6 px-4 pb-20`}>
        {[...Array(10)].map((_, index) => (
          <div key={index} className="container pt-10 pb-5 px-4">
            <div className={`bg-gradient-to-l rounded-2xl ${isMobile ? 'from-indigo-500' : 'from-indigo-700'} via-purple-800 to-pink-600 shadow-md text-center skew-y-6 py-4 hover:skew-x-12 scale-110 transition duration-300 ease-in-out h-40 w-full`}>
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Special title treatment</h5>
                  <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SmallBoxes;
