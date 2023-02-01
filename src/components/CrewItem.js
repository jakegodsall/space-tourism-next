import React from 'react';

import Image from 'next/image';

const CrewItem = (props) => {
    console.log(props.data);
    const role = props.data.role;
    const name = props.data.name;
    const imageSrc = props.data.images.png;
    const bio = props.data.bio;

    return (
        <div className='flex flex-col items-center m-8 duration-1000'>
            <p className='text-white text-xl uppercase font-barlow tracking-[4px] my-6 md:text-2xl md:self-start md:mb-8 duration-1000'>
                <span className='text-[#888]'>02</span> Meet your crew
            </p>
            <div className='grid grid-rows-2 items-center mt-5'>
                <div className='w-full border-b-2 border-[#555] md:row-start-2'>
                    <Image
                        className='m-auto'
                        src={imageSrc}
                        width={300}
                        height={300}
                        alt={name}
                    ></Image>
                </div>
                <div className='flex flex-col items-center md:row-start-1'>
                    {props.children}
                    <p className='text-[#888] font-bell uppercase text-2xl'>{role}</p>
                    <p className='text-[#fff] font-bell uppercase text-4xl'>{name}</p>
                    <p className='text-[#d0d6f9] font-barlow text-lg font-light tracking-wider leading-7 text-center'>
                        {bio}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CrewItem;
