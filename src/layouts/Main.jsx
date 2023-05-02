import React from 'react';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:min-h-[calc(100vh-341px)]'>
                <Outlet></Outlet>
            </div>
            <div className='mt-5'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;