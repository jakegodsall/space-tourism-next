import React from 'react';

import Image from 'next/image';

const DestinationItem = (props) => {
    const name = props.dest.name;
    const description = props.dest.description;
    const distance = props.dest.distance;
    const travel = props.dest.travel;

    return (
        <div
            className='flex flex-col items-center w-[90%] max-w-[500px] mx-auto md:w-[70%] md:max-w-[700px] md:mt-10 lg:max-w-[1400px] duration-1000'
            key={props.keyValue}
        >
            <p className='text-white uppercase font-barlow tracking-widest my-6 md:text-2xl md:self-start md:mb-8'>
                <span className='text-[#888]'>01</span> Pick your destination
            </p>
            <div className='flex flex-col items-center lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-10'>
                <div className='min-w-[300px] px-[100px] md:px=[100px] lg:px-5'>
                    <Image
                        src={props.dest.images.png}
                        alt={name}
                        width={500}
                        height={500}
                        priority={true}
                    ></Image>
                </div>

                <div className='flex flex-col items-center lg:items-start'>
                    {props.children}
                    <div className='flex flex-col items-center text-white lg:items-start'>
                        <h1 className='font-bell uppercase text-6xl md:mb-5 duration-1000 lg:text-8xl'>
                            {name}
                        </h1>
                        <p className='font-barlow text-[#d0d6f9] text-center lg:text-left'>
                            {description}
                        </p>
                        <div className='flex flex-col items-center border-t border-[#888] w-full my-5 pt-5 md:flex-row md:justify-center md:items-center md:gap-20 md:my-10 md:pt-10 lg:justify-start duration-1000'>
                            <div className='flex flex-col items-center lg:items-start'>
                                <p className='font-barlow text-[#d0d6f9] uppercase tracking-widest'>
                                    avg. distance
                                </p>
                                <p className='font-bell uppercase text-2xl mb-5 mt-2'>{distance}</p>
                            </div>
                            <div className='flex flex-col items-center'>
                                <p className='font-barlow text-[#d0d6f9] uppercase tracking-widest'>
                                    est. travel time
                                </p>
                                <p className='font-bell uppercase text-2xl mb-5 mt-2'>{travel}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DestinationItem;
