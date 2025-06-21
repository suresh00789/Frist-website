import React, { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  

    return (
        <>
            <nav className='bg-gradient-to-right from-green-400 via-blue-500 to-yellow-400 fixed top-0 right-0 left-0 z-50 h-16'>
                <div className='h-16 flex items-center justify-between px-4'>
                    <div className='font-mono text-xl text-gray-900 font-bold hover:text-amber-400 transition duration-300 transform hover:scale-110'>
                        SURESH !!
                    </div>

                    <div className='hidden md:flex space-x-4'>
                        <a href="#" className='text-gray-900 text-2xl px-4 hover:text-amber-400'>Home</a>
                        <a href="#" className='text-gray-900 text-2xl px-4 hover:text-amber-400'>About</a>
                        <a href="#" className='text-gray-900 text-2xl px-4 hover:text-amber-400'>Services</a>
                        <a href="#" className='text-gray-900 text-2xl px-4 hover:text-amber-400'>Contact</a>
                    </div>

                    <button className='hidden md:block font-mono text-gradient-to-right from-green-400 via-blue-500
                     to-yellow-400 text-2xl px-4 hover:transform hover:scale-110
                     transition duration-300 ease-in-out cursor-pointer shadow-2xl rounded-lg pl-9 pr-9 py-2' onClick={() => alert("coming soon")}>
                        Sign In
                    </button>

                    <div className='flex md:hidden space-x-4'>
                        <button className='font-mono text-gradient-to-right from-green-400 via-blue-500 to-yellow-400 text-2xl px-4'onClick={() => alert("coming soon")}>
                            <i className='bx bx-user'></i>
                        </button>
                        <button className='font-mono text-gradient-to-right from-green-400 via-blue-500 to-yellow-400 px-4 py-2 text-2xl' onClick={() => setIsOpen(!isOpen)} type='button'>
                            <i className='bx bx-menu'></i>
                        </button>
                    </div>
                </div>

                <div className={`md:hidden ${isOpen ? "block" : "hidden"} px-4 bg-white shadow-md font-mono rounded-lg mt-2 text-black w-full border-t border-gray-100 text-2xl space-y-5 pb-7`}>
                    <a href="#" className='text-2xl px-4 pt-5 block '  onClick={() => alert("coming soon...")}><i className='bx bx-user-voice'></i> Schedule Page?</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-diamond'></i> About Page?</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-low-vision'></i> Your Activity?</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-diamond'></i> Check Your Account Status.</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-diamond'></i> Today Your Plan?</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-diamond'></i> Edit Your Profile.</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-diamond'></i> Your Account Days?</a>
                    <a href="#" className='text-2xl px-4 hover:underline block' onClick={() => alert("coming soon...")}><i className='bx bx-diamond'></i> Help.</a>
                    <a href="#" className='text-2xl px-4 hover:underline text-red-700 block' onClick={() => alert("coming soon...")}>Delete Your Account.</a>
                    <a href="#" className='text-2xl px-4 hover:underline text-blue-500 block' onClick={() => alert("coming soon...")}>Add Account.</a>
                    <a href="#" className='text-2xl px-4 hover:underline text-red-700 block' onClick={() => alert("coming soon...")}>Log Out.</a>
                    <a href="#" className='text-2xl px-4 hover:underline text-red-700 block' onClick={() => alert("coming soon...")}>Log Out All Devices.</a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
