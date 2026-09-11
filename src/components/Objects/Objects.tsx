import React, { use } from 'react';
import type { Iobject } from '../../types/objectType';
import AvailableObjects from './AvailableObjects';

interface ObjectProps{
    objectsPromise:Promise<Iobject[]>
}

const Objects = ({objectsPromise}:ObjectProps) => {
    // console.log(objectsPromise);

    const objects = use(objectsPromise)
    // console.log(objects.)
    return (
        <div className='container mx-auto'>
            <AvailableObjects objects ={objects} />
        </div>
    );
};

export default Objects;