import React from 'react';

const DestinationItem = (props) => {
    const name = props.dest.name;
    const description = props.dest.description;
    const distance = props.dest.distance;
    const travel = props.dest.travel;

    return (
        <div className='flex flex-col items-center text-white'>
            <h1 className='font-bell uppercase text-6xl'>{name}</h1>
            <p className='font-barlow text-[#d0d6f9] text-center'>{description}</p>
            <div className='flex flex-col items-center'>
                <p className='font-barlow text-[#d0d6f9] uppercase tracking-widest mt-5'>
                    avg. distance
                </p>
                <p className='font-bell uppercase text-2xl mb-5 mt-2'>{distance}</p>
                <p className='font-barlow text-[#d0d6f9] uppercase tracking-widest'>
                    est. travel time
                </p>
                <p className='font-bell uppercase text-2xl mb-5 mt-2'>{travel}</p>
            </div>
        </div>
    );
};

export default DestinationItem;
