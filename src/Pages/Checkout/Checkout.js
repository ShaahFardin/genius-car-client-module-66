import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const {title} = useLoaderData();
    return (
        <div>
            <h1 className='text-3xl text-orange-500'>Thsi is a Checkout page</h1>
            <h1 className='text-3xl text-orange-500'>{title}</h1>
        </div>
    );
};

export default Checkout;