import React from 'react';
import matin from '../assets/banner-stack.png'
const Banner = () => {
    return (
        <div className='flex  items-center pt-25 container mx-auto'>
            <div className='w-[50%]'>
                <h1 className='text-5xl font-bold'>Build your Ideal</h1>
                <h1 className='text-5xl font-bold'>Development Stack</h1>
                <p className='mt-6'>Explore frontend,backend,database,and tooling options,compare them side by side,and put together the stack that fits your next project.</p>

                <div className='mt-14'>
                    <button className="btn btn-active btn-secondary">Secondary</button>
                    <button className="btn ">Secondary</button>
                </div>

            </div>
            <div className='flex  w-[50%] justify-center'>
                <img src={matin} alt="" />
                </div>

        </div>
    );
};

export default Banner;