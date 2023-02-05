import React, { useState } from 'react';

import Head from 'next/head';

import Header from '@/components/Header';

import TechnologyItem from '@/components/TechnologyItem';

// Images for TechnologyItem components
import LaunchVehicleLandscape from '../../public/images/technology/image-launch-vehicle-landscape.jpg';
import LaunchVehiclePortrait from '../../public/images/technology/image-launch-vehicle-portrait.jpg';
import SpaceportLandscape from '../../public/images/technology/image-spaceport-landscape.jpg';
import SpaceportPortrait from '../../public/images/technology/image-spaceport-portrait.jpg';
import SpaceCapsuleLandscape from '../../public/images/technology/image-space-capsule-landscape.jpg';
import SpaceCapsulePortrait from '../../public/images/technology/image-space-capsule-portrait.jpg';

const TECH_DATA = [
    {
        accessKey: 'lv',
        name: 'Launch vehicle',
        images: {
            portrait: LaunchVehiclePortrait,
            landscape: LaunchVehicleLandscape,
        },
        description:
            "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
        accessKey: 'sp',
        name: 'Spaceport',
        images: {
            portrait: SpaceportPortrait,
            landscape: SpaceportLandscape,
        },
        description:
            'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
        accessKey: 'sc',
        name: 'Space capsule',
        images: {
            portrait: SpaceCapsulePortrait,
            landscape: SpaceCapsuleLandscape,
        },
        description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
];

const Technology = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('lv');

    const data = TECH_DATA.filter((dataItem) => dataItem.accessKey === selectedTechnology)[0];

    const onClickHandler = (e) => {
        console.log(e.target.value);
        setSelectedTechnology(e.target.value);
        console.log(e.target.value + ' clicked');

        e.target.classList.add('activeBtn');
    };

    return (
        <>
            <Head>
                <title>Technology</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop'>
                <Header />
                <p className='text-white text-xl tracking-widest uppercase text-center font-barlow font-light my-6 md:text-2xl md:self-start md:mb-8 lg:text-start lg:ml-[5rem] lg:text-3xl'>
                    <span className='text-[#888]'>03</span> Space Launch 101
                </p>
                <div className='flex justify-center'>
                    <TechnologyItem
                        name={data.name}
                        description={data.description}
                        portrait={data.images.portrait}
                        landscape={data.images.landscape}
                    >
                        {/* <ul className='flex justify-center lg:flex-col peer'>
                            <li>
                                <label
                                    htmlFor='lv'
                                    className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white peer-checked:bg-white peer-checked:text-red cursor-pointer mx-2 lg:w-[4rem] lg:h-[4rem]'
                                >
                                    1
                                </label>
                                <input
                                    type='radio'
                                    name='technology'
                                    value='lv'
                                    id='lv'
                                    className='opacity-0 peer'
                                    onChange={onChangeHandler}
                                />
                            </li>
                            <li>
                                <label
                                    htmlFor='sp'
                                    className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white peer-checked:bg-white peer-checked:text-[rgba(0, 0, 0, 0)] cursor-pointer mx-2 lg:w-[4rem] lg:h-[4rem]'
                                >
                                    2
                                </label>
                                <input
                                    type='radio'
                                    name='technology'
                                    value='sp'
                                    id='sp'
                                    className='opacity-0 peer'
                                    onChange={onChangeHandler}
                                />
                            </li>
                            <li>
                                <label
                                    htmlFor='sc'
                                    className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white peer-checked:bg-white peer-checked:text-[rgba(0, 0, 0, 0)] cursor-pointer mx-2 lg:w-[4rem] lg:h-[4rem]'
                                >
                                    3
                                </label>
                                <input
                                    type='radio'
                                    name='technology'
                                    value='sc'
                                    id='sc'
                                    className='opacity-0 peer'
                                    onChange={onChangeHandler}
                                />
                            </li>
                        </ul> */}
                        <nav className='flex justify-center lg:flex-col'>
                            <button
                                className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white cursor-pointer mx-2 lg:w-[4rem] lg:h-[4rem] lg:my-3'
                                onClick={onClickHandler}
                                value='lv'
                            >
                                1
                            </button>
                            <button
                                className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white cursor-pointer mx-2 lg:w-[4rem] lg:h-[4rem] lg:my-3'
                                onClick={onClickHandler}
                                value='sp'
                            >
                                2
                            </button>
                            <button
                                className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white cursor-pointer mx-2 lg:w-[4rem] lg:h-[4rem] lg:my-3'
                                onClick={onClickHandler}
                                value='sc'
                            >
                                3
                            </button>
                        </nav>
                    </TechnologyItem>
                </div>
            </div>
        </>
    );
};

export default Technology;
