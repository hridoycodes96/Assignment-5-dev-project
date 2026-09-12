import React, { useState } from 'react';
import type { Iobject } from '../../types/objectType';

const ObjectsCard = ({object}:{object:Iobject}) => {



    const [isSelected, setIsSelected]= useState(true)


    
    return (
         <div className='p-6 border rounded-4xl'>
                                <div className='flex items-center justify-between '>

                                    <img src={object.icon} alt="" className='h-12 w-12' />

                                    <button className="btn bg-emerald-100 text-blue-500 rounded-4xl">{object.badge}</button>

                                </div>
                                <div>
                                    <h1 className='text-5xl font-bold mt-7'>{object.name}</h1>
                                </div>
                                <div>
                                    <p className='text-[#64748B] mt-5'>{object.description}</p>
                                </div>



                                <div className='flex items-center justify-between font-bold mt-12'>
                                    <button className='p-2 bg-green-100'>{object.category}</button>

                                    <h3>{object.difficulty}</h3>
                                    <h3 className='text-2xl'>⭐{object.rating}</h3>
                                </div>
                                <div>
                                    <button
                                     onClick={()=>setIsSelected(false)}
                                     className={`w-full bg-black p-5 rounded-4xl mt-20  text-2xl ${isSelected? 'text-white':'text-red-500'}`}
                                    // className='w-full bg-black p-5 rounded-4xl mt-20 text-white text-2xl'
                                    
                                    >Add to Stack</button>
                                </div>

                            </div>
    );
};

export default ObjectsCard;