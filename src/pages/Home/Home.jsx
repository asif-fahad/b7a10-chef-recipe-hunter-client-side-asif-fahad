import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <section className='bg-image '>
                <div className='flex flex-col lg:flex-row justify-center justify-items-center'>

                    <div className=''>
                        <h1 className='text-2xl w-full lg:leading-tight sm:text-4xl lg:text-6xl lg:max-w-3xl text-white'>
                            One Step Closer
                            <br />
                            To Your
                            <br />
                            <span className='text-white' >Favorite Recipes</span>
                        </h1>
                        <p className='my-6 text-xs sm:text-base md:text-lg max-w-2/3 md:max-w-xl max-w-2xl text-white'>
                            Explore many recipes with all the information you need.
                        </p>
                    </div>

                </div >
            </section>
        </div>
    );
};

export default Home;