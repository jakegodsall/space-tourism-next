import React from 'react';

import Image from 'next/image';

const CrewItem = (props) => {
    console.log(props.data);
    const crewName = props.data.name;
    const imageSrc = props.data.images.png;

    return (
        <div className='flex flex-col items-center mt-5 duration-1000'>
            <p className='text-white text-xl uppercase font-barlow tracking-[4px] my-6 md:text-2xl md:self-start md:mb-8 duration-1000'>
                <span className='text-[#888]'>02</span> Meet your crew
            </p>
            <div>
                <div>
                    <Image src={imageSrc} width={500} height={500}></Image>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default CrewItem;
