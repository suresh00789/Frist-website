import React from 'react';

const Marqee = () => {
    return (
        <>
        <div>
<h1 className=' pt-20 pl-10 text-center text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500'>Welcome !!</h1>
        </div>
        
          <div className="flex flex-col items-center pb-55 pt-64 w-full space-y-4 mt-10">
            <div className="w-full overflow-hidden whitespace-nowrap relative hover:animation-play-state-paused">
                <div className="inline-block animate-marquee-left">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className='inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-indigo-200 via-purple-200 to-pink-100 shadow-2xl leading-none tracking-tight font-bold text-gray-700 sm:text-3xl md:text-5xl lg:text-6xl h-32 mx-6 px-8 py-4'>
                           =>  MR SURESH JANGID !!
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" style={{ opacity: 0.5 }}></div>
            </div>
            <div className="w-full overflow-hidden whitespace-nowrap relative hover:animation-play-state-paused">
                <div className="inline-block animate-marquee-right">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className='inline-flex items-center justify-center bg-gradient-to-l
                         from-indigo-200 via-purple-200 to-pink-100 shadow-2xl rounded-xl leading-none 
                         tracking-tight font-bold text-gray-700 sm:text-3xl md:text-5xl lg:text-6xl h-32 mx-6 px-8 py-4'>
                          =>  MR SURESH JANGID !!
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" style={{ opacity: 0.5 }}></div>
            </div>
            <div className="w-full overflow-hidden whitespace-nowrap relative hover:animation-play-state-paused">
                <div className="inline-block animate-marquee-left">
                    {[...Array(10)].map((_, index) => (
                        <div key={index} className='inline-flex items-center justify-center rounded-xl bg-gradient-to-l from-indigo-200 via-purple-200 to-pink-100 shadow-2xl leading-none tracking-tight font-bold text-gray-700 sm:text-3xl md:text-5xl lg:text-6xl h-32 mx-6 px-8 py-4'>
                         => MR SURESH JANGID !!
                        </div>
                    ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white pointer-events-none" style={{ opacity: 0.5 }}></div>
            </div>

            <style jsx>{`
        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 55s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 55s linear infinite;
        }
        .hover\\:animation-play-state-paused:hover .animate-marquee-left,
        .hover\\:animation-play-state-paused:hover .animate-marquee-right {
          animation-play-state: paused;
        }
      `}</style>
        </div>
        
        
        </>
      
    );
}

export default Marqee;
