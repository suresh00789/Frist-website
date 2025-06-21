import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col lg:flex-row items-start p-4">
                <div className="w-full lg:w-1/4 pt-12 lg:pt-36">
                    <div>
                        <p className='text-2xl font-bold text-center font-mono'>
                            SURYA www.surya_01_7.portfolio.com 
                        </p>
                    </div>
                    <hr className="my-4  text-gray-500" />
                    <div className="flex justify-center lg:justify-start space-x-4 mt-4">
                        <a className="hover:translate-y-1/9 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 font-bold rounded-md px-4 py-2 transition transform scale-110 duration-300 ease-in-out" href="http://www.instagram.com/surya_01_7" target="_blank" rel="noopener noreferrer">
                            <i className='bx bxl-instagram-alt text-3xl'></i>
                        </a>
                        <a href="http://www.google.com/surya_01_7" target="_blank" rel="noopener noreferrer" className="hover:translate-y-1/9 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 font-bold rounded-md px-4 py-2 transition transform scale-110 duration-300 ease-in-out">
                            <i className='bx bxl-google text-3xl'></i>
                        </a>
                        <a href="http://www.facebook.com/surya_01_7" target="_blank" rel="noopener noreferrer" className="hover:translate-y-1/9 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 font-bold rounded-md px-4 py-2 transition transform scale-110 duration-300 ease-in-out">
                            <i className='bx bxl-facebook text-3xl'></i>
                        </a>
                        <a href="http://www.github.com/surya_01_7" target="_blank" rel="noopener noreferrer" className="hover:translate-y-1/9 text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-500 font-bold rounded-md px-4 py-2 transition transform scale-110 duration-300 ease-in-out">
                            <i className='bx bxl-github text-3xl'></i>
                        </a>
                    </div>
                    <hr className='hover:transform hover:scale-110 transition duration-300 text-gray-500 ease-in-out border-b-2 shadow-2xl my-4' />
                </div>
                <div className="w-full lg:w-1/4 pt-12 lg:pt-36 lg:pl-8 mt-6  lg:mt-0">
                    <h2 className="text-xl font-bold mb-4 pl-10">Follow Us</h2>
                    <div className="space-y-2 font-semibold font-mono  pl-10">
                        <p className="text-lg">For any inquiries, please contact us at:</p>
                        <p className="text-lg">Email: Sj8332572t@portfolio.com</p>
                        <p className="text-lg">Phone: +91 9950944929</p>
                        <p className="text-lg">Address: 343041 Street, Sanchore City, INDIA</p>
                    </div>
                    <div className="mt-4 pl-10">
                        <h3 className="text-lg font-bold">FAQ</h3>
                        <p className="text-sm">Find answers to common questions in our FAQ section.</p>
                        <hr className="my-4  text-gray-500" />
                    </div>
                </div>
                <div className="w-full lg:w-1/4 pt-12 lg:pt-36 lg:pl-8 mt-6 lg:mt-0">
                    <h2 className="text-xl font-bold mb-4 pl-10">Open Source</h2>
                    <div className="space-y-2 font-semibold font-mono pl-10">
                        <p className="text-lg">Download</p>
                       <a href="http://www.instagram.com/surya_01_7" target="_blank" rel="noopener noreferrer"> <p className="text-lg">Instagram</p></a>
                        <p className="text-lg">GitHub</p>
                        <p className="text-lg">ZezoSoft</p>
                    </div>
                    <div className="mt-4 pl-10">
                        <h3 className="text-lg font-bold">FAQ</h3>
                        <p className="text-sm">Odoo is a suite of open source business apps that cover all your company needs: CRM, eCommerce, accounting, inventory, point of sale, project management, etc.</p>
                        <hr className="my-4  text-gray-500" />
                    </div>
                </div>
                <div className="w-full lg:w-1/4 pt-12 lg:pt-36 lg:pl-8 mt-6 lg:mt-0">
                    <h2 className="text-xl font-bold mb-4 pl-10">Community</h2>
                    <div className="space-y-2 font-semibold font-mono  pl-10">
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Our company  </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Jobs </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Blog </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Customers </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Contact us </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Partnership </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Events </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Podcast </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Brand Assets </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Security </p>
                    </div>
                </div>
                  <div className="w-full lg:w-1/4 pt-12 lg:pt-36 lg:pl-8 mt-6 lg:mt-0">
                    <h2 className="text-xl font-bold mb-4 pl-10">Services</h2>
                    <div className="space-y-2 font-semibold font-mono  pl-10">
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Odoo.sh Hosting </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Support </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Upgrade </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Custom Developments </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Education </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Find an Accountant </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Find a Partner </p>
                        <p className="text-lg hover:translate-x-1/9 transition duration-300 ease-in-out">Become a Partner </p >
                    </div>
                </div>
            </div>
            <h1 className='text-center font-mono text-base'>Made with 😮‍💨 by Surya jangid</h1>
            <hr className=' text-gray-500' />
        </footer>
    );
}

export default Footer;
