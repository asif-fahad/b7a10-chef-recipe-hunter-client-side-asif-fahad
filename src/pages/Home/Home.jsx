import React, { useEffect, useState } from 'react';
import './Home.css'
import Chefs from '../Chefs/Chefs/Chefs';

const Home = () => {
    const [data, setData] = useState([]);


    useEffect((() => {
        fetch('https://b7a10-chef-recipe-hunter-server-side-asif-fahad-asif-fahad.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setData(data))
    }), [])

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

            <section className='mt-5 bg-gray-300'>
                <div className='w-5/12 mx-auto'>
                    <div className='text-center mb-2 text-3xl font-extrabold'>
                        <h1>Special Features</h1>
                    </div>
                    <div className='flex gap-2'>
                        <div className='border text-center w-72'>
                            <h2 className='font-bold'>Food Nutritions</h2>
                            <p>In the same way, the types that seem to us little clear now should become clear in the future.</p>
                        </div>
                        <div className='border text-center w-72'>
                            <h2 className='font-bold'>Cooking Period</h2>
                            <p>But the duis or him iriure pain in hendreit in vulputate wants to be molestie consequat, or that pain eu feugiat no facilisis.</p>
                        </div>
                        <div className='border text-center w-72'>
                            <h2 className='font-bold'>Membership</h2>
                            <p>As I have already seen, I will come to the smallest detail, who takes up the cover of our training program for the benefit of the players.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='grid grid-cols-1 lg:grid-cols-2 mt-5 w-8/12 mx-auto gap-5'>
                {
                    data.map(chef => <Chefs
                        key={chef.id}
                        chef={chef}
                    ></Chefs>)
                }
            </section>

            <section className='mt-5 bg-gray-200'>
                <div className='w-5/12 mx-auto'>
                    <div className='text-center mb-2 text-3xl font-extrabold'>
                        <h1>TODAYS EVENT</h1>
                    </div>
                    <div className='text-center'>
                        <h1>HouseWife Cooking Competition</h1>
                        <p>Saturday, May 6, 2023</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;