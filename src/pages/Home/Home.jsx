import React from 'react';

const Home = () => {
    return (
        <div>
            <section>
                <div className='flex flex-col lg:flex-row bg-gray-200'>
                    <div>
                        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10 flex flex-col items-center pb-5 text-center lg:pb-56 text-gray-900'>
                            <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl title-text'>
                                One Step Closer
                                <br />
                                To Your
                                <br />
                                <span className='text-violet-500' >Dream Job</span>
                            </h1>
                            <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-gray-900'>
                                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                            </p>
                            <div className='flex flex-wrap justify-center'>
                                <button type='button' className='font-medium  transition duration-200  shadow-md  md:mb-0  px-4 py-2 md:px-8 md:py-3 m-2 text-lg rounded-full border-transparent border-2  text-gray-700 hover:bg-cyan-400 bg-cyan-200'>
                                    Get Started
                                </button>
                            </div>
                        </div>
                    </div >
                    <div>
                        <img
                            src=""
                            alt=''
                            className='object-contain'
                        />
                    </div>
                </div >
            </section>
        </div>
    );
};

export default Home;