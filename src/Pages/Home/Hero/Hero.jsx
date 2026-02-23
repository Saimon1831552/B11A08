import React from 'react';
// remove useLoaderData and useState

const Hero = ({ setSearchTerm }) => {

    return (
        <section className=''>
            <div className= 'border-2 border-white px-6 md:px-20 lg:px-36 py-16 flex flex-col justify-center items-center gap-10 shadow-lg bg-gradient-to-b from-[#EFEFEF] to-white'>
                <div>
                    <h2 className='text-2xl md:text-3xl font-bold text-center'>Dependable Care, Backed by Trusted Professionals.</h2>
                    <p className='text-gray-600 text-sm text-center mt-2'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's <br /> a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
                </div>
                <div className='flex flex-col md:flex-row gap-4 w-full justify-center items-center'>
                    <div className="relative w-full max-w-xl">
                        <input 
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className='bg-white w-full h-14 pl-6 pr-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#176AE5] shadow-sm' 
                            type="search" 
                            placeholder='Search any doctor (e.g. Cardiologist)..' 
                        />
                    </div>
                    <button className='bg-[#176AE5] hover:bg-[#1256bc] transition-all h-14 px-10 rounded-full font-semibold text-lg text-white w-full md:w-auto'>
                        Search
                    </button>
                </div>

                <div className='flex flex-row justify-between gap-3.5 items-center'>
                    <div>
                        <img className='w-full h-auto object-cover' src="https://i.ibb.co.com/6cKVHjYL/Frame-2087325956.png" alt="" />
                    </div>

                    <div>
                        <img className='w-full h-auto object-cover' src="https://i.ibb.co.com/6cKVHjYL/Frame-2087325956.png" alt="" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;