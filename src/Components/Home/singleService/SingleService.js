import React from 'react';
import { Link } from 'react-router-dom';

const SingleService = (props) => {
    const { name, img, details, price,Duration } = props.service;
    return (
        <div className='custom-shadow py-10 rounded-md'>

            <div className="max-w-sm  rounded-lg border text-center">
                <img className="rounded-t-lg w-2/3 mx-auto" src={img} alt="" />
                <div className="p-5">
                    <h1 className='font-bold'> Package Name: {name}</h1>

                    <p className="mb-3 font-normal pt-5 text-gray-700 dark:text-gray-400"><span className='font-bold'>Benefits:</span>    {details} </p>
                    <p><span className='font-bold'>Price:</span> BDT, {price}/-</p>
                    <p><span className='font-bold'>Time:</span> : {Duration}</p>

                </div>
                <button className='bg-[#4a9c27] hover:bg-[#141414]  px-4 py-2 mb-2 rounded-full text-white'><Link to='/checkout'>Choose Service</Link></button>
            </div>

        </div>
    );
};

export default SingleService;