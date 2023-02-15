import React from 'react';

import Image from 'next/image';

import DouglasHurley from '../../public/images/crew/image-douglas-hurley.png';
import MarkShuttleworth from '../../public/images/crew/image-mark-shuttleworth.png';
import VictorGlover from '../../public/images/crew/image-victor-glover.png';
import AnoushehAnsari from '../../public/images/crew/image-anousheh-ansari.png';

const imageMap = {
    dh: DouglasHurley,
    ms: MarkShuttleworth,
    vg: VictorGlover,
    aa: AnoushehAnsari,
};

const CrewItem = (props) => {
    const role = props.data.role;
    const name = props.data.name;
    const imageSrc = imageMap[props.data.accessKey];
    const bio = props.data.bio;

    return (
        <div className='flex flex-col items-center m-8 duration-1000' key={props.keyValue}>
            <p className='text-white text-xl uppercase font-barlow tracking-[4px] my-6 md:text-2xl md:self-start md:mb-8 lg:hidden duration-1000'>
                <span className='text-[#888]'>02</span> Meet your crew
            </p>
            <div className='grid grid-rows-[320px, auto] items-center mt-5 lg:grid-rows-1 lg:grid-cols-2'>
                <div className='h-[320px] border-b-2 border-[#555] md:row-start-2 relative md:h-[400px] md:border-b-0 lg:row-start-1 lg:col-start-2 lg:h-[60vh]'>
                    <Image
                        src={imageSrc}
                        alt={name}
                        className='m-auto object-contain z-'
                        fill
                    ></Image>
                </div>
                <div className='h-full w-full px-5 mx-auto flex flex-col items-center text-center pt-10 md:row-start-1 md:relative md:h-[330px] md:w-[75%] lg:h-full lg:justify-center lg:text-left lg:relative'>
                    <p className='text-white text-xl uppercase font-barlow tracking-[4px] my-6 md:text-xl md:self-start md:mb-8 hidden lg:block duration-1000 absolute top-0 order-2'>
                        <span className='text-[#888]'>02</span> Meet your crew
                    </p>
                    <p className='text-[#888] font-bell uppercase text-2xl lg:self-start order-3'>
                        {role}
                    </p>
                    <p className='text-[#fff] font-bell uppercase text-4xl md:text-5xl my-4 lg:self-start order-4'>
                        {name}
                    </p>
                    <p className='text-[#d0d6f9] font-barlow text-lg font-light tracking-wider leading-7 text-center lg:text-left order-5'>
                        {bio}
                    </p>
                    <div className='md:block md:absolute md:bottom-0 order-1 pb-5'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrewItem;
