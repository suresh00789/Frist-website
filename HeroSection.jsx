import React from 'react'


const HeroSection = () => {
  return (
     <>
      <div className=" bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 h-114 w-screen pr-0 pl-0 font-mono">
        <div className="row w-25xllg">
          <div className="col-sm-6 font-semibold text-center pt-64  pb-20  ">
            <h1 className='  text-48px flex items-center justify-center gap-4 text-48px leading-none tracking-tight font-bold text-gray-700 sm:text-3xl'>HI I AM SURESH <span className=' text-48px leading-none tracking-tight font-bold text-amber-400 sm:text-3xl'>JANGID !!</span></h1>
            <br />
            <p  className=' flex items-center justify-center gap-4 text-48px leading-none tracking-tight font-bold text-gray-700 sm:text-3xl'>I am a web developer! </p>
            <hr className='w-64 border-b-2 border-black m-auto mt-4 mb-4' />
            <p className='bg-transparent rounded-lg shadow-md hover: hover:transform hover:scale-110 transition duration-300 ease-in-out focus:outline-none focus:shadow-outline py-2 px-4 cursor-pointer text-amber-400 font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.</p>
          </div>
        </div>
         <div className="row w-25xllg">
          <div className="col-sm-6 font-semibold text-center pt-64 pr-96 pb-20  ">
             <img src="" alt="" />
          </div>
        </div>
      </div>
     </>
  )
}

export default HeroSection