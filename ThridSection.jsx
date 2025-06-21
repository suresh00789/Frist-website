import React from 'react'

const ThridSection = () => {
    return (
        <>
            <div className='bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-100 rounded-2xl shadow-2xl shadow-black w-full h-[35vh]'>
                <h1 className='text-3xl font-bold text-center text-gray-700 mb-8
         flex justify-center items-center pt-20 font-mono'>HI I AM   <span className='text-48px 
         pl-4 leading-none font-mono font-bold text-shadow-2xl
          text-amber-500 sm:text-3xl'>  SURESH JANGID !!</span></h1>
                <p className='text-2xl font-animate text-center text-cyan-700  mb-8 flex 
        justify-center items-center pt-1 font-mono'>Your Growth Potential Is Limitless </p>
                <div className='flex justify-center items-center'>
                    <button className='shadow-2xl font-bold font-mono text-2xl text-center rounded-xl 
             bg-gradient-to-l form-blue-500 to-red-500  hover:bg-gradient-to-r from-green-400 via-pink-500 to-purple-500 
             transform transition duration-300 ease-in-out text-shadow-2xl 
              flex justify-center items-center pt-3 pl-3 pr-3 pb-3 font-animate text-gray-800  mb-8 
             ' onClick={() => alert("coming soon")} >Register Now</button>
               <div className='pl-10'>
            <button className='  shadow-2xl font-bold font-mono text-2xl text-center rounded-xl 
             bg-transparent  border-solid border-2
              border-white hover:-translate-x-2 scale-x-110 transform transition duration-300 ease-in-out  text-shadow-2xl 
              flex justify-center items-center pt-3 pl-3 pr-3 pb-3 font-animate text-gray-800  mb-8 
             ' onClick={() => alert("coming soon")} >Check  Now</button>
               </div>
        
                </div>

            </div>
        </>
    )
}

export default ThridSection