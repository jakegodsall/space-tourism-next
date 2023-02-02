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
    console.log(props.data);
    const role = props.data.role;
    const name = props.data.name;
    const imageSrc = imageMap[props.data.accessKey];
    const bio = props.data.bio;

    console.log(imageSrc);

    return (
        <div className='flex flex-col items-center m-8 duration-1000'>
            <p className='text-white text-xl uppercase font-barlow tracking-[4px] my-6 md:text-2xl md:self-start md:mb-8 duration-1000'>
                <span className='text-[#888]'>02</span> Meet your crew
            </p>
            <div className='grid grid-rows-[320px, auto] items-center mt-5 lg:grid-rows-1 lg:grid-cols-2'>
                <div className='h-[320px] border-b-2 border-[#555] md:row-start-2 relative md:h-[400px] md:border-b-0 lg:row-start-1 lg:col-start-2 lg:h-[800px]'>
                    <Image src={imageSrc} alt={name} className='m-auto object-contain' fill></Image>
                </div>
                <div className='h-full w-full px-5 mx-auto flex flex-col items-center text-center md:row-start-1 md:relative md:h-[300px] md:w-[75%] lg:h-full lg:justify-center'>
                    <div className='my-6 md:hidden'>{props.children}</div>
                    <p className='text-[#888] font-bell uppercase text-2xl'>{role}</p>
                    <p className='text-[#fff] font-bell uppercase text-4xl md:text-5xl my-4'>
                        {name}
                    </p>
                    <p className='text-[#d0d6f9] font-barlow text-lg font-light tracking-wider leading-7 text-center'>
                        {bio}
                    </p>
                    <div className='hidden md:block md:absolute md:bottom-[5rem] md:left-[2rem]'>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CrewItem;
