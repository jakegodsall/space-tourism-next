import React from 'react';

import Image from 'next/image';

const DestinationItem = (props) => {
    const name = props.dest.name;
    const description = props.dest.description;
    const distance = props.dest.distance;
    const travel = props.dest.travel;

    return (
        <div className='flex flex-col items-center w-[90%] mx-auto'>
            <p className='text-white uppercase font-barlow tracking-widest my-6'>
                <span className='text-[#888]'>01</span> Pick your destination
            </p>
            <Image src={props.dest.images.png} width={250} height={250}></Image>
            {props.children}
            <div className='flex flex-col items-center text-white'>
                <h1 className='font-bell uppercase text-6xl'>{name}</h1>
                <p className='font-barlow text-[#d0d6f9] text-center'>{description}</p>
                <div className='flex flex-col items-center border-t border-[#888] w-full mt-5'>
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
        </div>
    );
};

export default DestinationItem;
