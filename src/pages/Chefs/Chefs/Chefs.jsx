import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Chefs = ({ chef }) => {
    console.log(chef)
    const { id, chef_photo, chef_name, experience, recipes_number, likes } = chef;

    return (
        <div >
            <div className="card w-96 h-96 bg-base-100 shadow-xl">
                <figure><img src={chef_photo} alt="chefs" className='h-52 object-contain' /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <Link to={`/chefsDetails/${id}`} ><button className='btn'>View Recipes</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Chefs;