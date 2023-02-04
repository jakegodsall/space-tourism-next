import React from 'react';

import Image from 'next/image';

const TechnologyItem = (props) => {
    return (
        <div className='flex flex-col items-center lg:grid lg:grid-cols-[1fr 3fr 2fr] lg:grid-rows-1 lg:ml-[3rem]'>
            <Image src={props.landscape} alt={props.name} className='lg:hidden' />
            <Image
                src={props.portrait}
                alt={props.name}
                className='hidden lg:inline lg:col-start-3 lg:row-start-1'
            />
            <div className='mt-10'>{props.children}</div>
            <div className='flex flex-col items-center text-center p-5 sm:w-[70%] col-start-2'>
                <p className='uppercase text-[#d0d6f9] font-barlow tracking-widest font-light'>
                    The terminology...
                </p>
                <p className='uppercase text-white font-bell text-3xl mb-7 mt-5'>{props.name}</p>
                <p className='text-[#d0d6f9] font-barlow leading-7 font-light text-lg'>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default TechnologyItem;
