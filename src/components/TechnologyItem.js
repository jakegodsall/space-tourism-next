import React from 'react';

import Image from 'next/image';

const TechnologyItem = (props) => {
    return (
        <div>
            <Image src={props.landscape} alt={props.name} />
            <div className='mt-10'>{props.children}</div>
            <div className='flex flex-col items-center text-center p-5'>
                <p className='uppercase text-[#d0d6f9] font-barlow tracking-widest font-light'>
                    The terminology...
                </p>
                <p className='uppercase text-white font-bell text-3xl mb-7 mt-5'>{props.name}</p>
                <p className='text-[#d0d6f9] font-barlow leading-7 font-light text-lg md:w-[50%]'>
                    {props.description}
                </p>
            </div>
        </div>
    );
};

export default TechnologyItem;
