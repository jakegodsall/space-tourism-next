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
            <div className='grid grid-rows-[320px, auto] items-center mt-5'>
                <div className='w-full border-b-2 border-[#555] md:row-start-2 relative'>
                    <Image className='m-auto' src={imageSrc} alt={name}></Image>
                </div>
                <div className='h-full w-[60%] mx-auto flex flex-col items-center md:row-start-1 md:justify-between md:relative'>
                    <div className='md:invisible'>{props.children}</div>
                    <p className='text-[#888] font-bell uppercase text-2xl'>{role}</p>
                    <p className='text-[#fff] font-bell uppercase text-4xl'>{name}</p>
                    <p className='text-[#d0d6f9] font-barlow text-lg font-light tracking-wider leading-7 text-center'>
                        {bio}
                    </p>

                    <div className='invisible md:visible'>{props.children}</div>
                </div>
            </div>
        </div>
    );
};

export default CrewItem;
