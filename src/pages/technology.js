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
            portrait: SpaceCapsuleLandscape,
            landscape: SpaceCapsuleLandscape,
        },
        description:
            "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
];

const Technology = () => {
    const [selectedTechnology, setSelectedTechnology] = useState('lv');

    const data = TECH_DATA.filter((dataItem) => dataItem.accessKey === selectedTechnology)[0];

    const onChangeHandler = (e) => {
        setSelectedTechnology(e.target.value);
        e.target.checked = true;
    };

    return (
        <>
            <Head>
                <title>Technology</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop'>
                <Header />
                <p className='text-white text-xl tracking-widest uppercase text-center font-barlow font-light my-6 md:text-2xl md:self-start md:mb-8'>
                    <span className='text-[#888]'>03</span> Space Launch 101
                </p>
                <div>
                    <TechnologyItem
                        name={data.name}
                        description={data.description}
                        portrait={data.images.portrait}
                        landscape={data.images.landscape}
                    >
                        <ul className='flex justify-center'>
                            <li>
                                <label
                                    htmlFor='lv'
                                    className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white checked:bg-white checked:text-[rgba(0, 0, 0, 0)] cursor-pointer mx-2'
                                >
                                    1
                                </label>
                                <input
                                    type='radio'
                                    name='technology'
                                    value='lv'
                                    id='lv'
                                    class='appearance-none'
                                    onChange={onChangeHandler}
                                    defaultChecked={true}
                                />
                            </li>
                            <li>
                                <label
                                    htmlFor='sp'
                                    className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white checked:bg-white checked:text-[rgba(0, 0, 0, 0)] cursor-pointer mx-2'
                                >
                                    2
                                </label>
                                <input
                                    type='radio'
                                    name='technology'
                                    value='sp'
                                    id='sp'
                                    class='appearance-none'
                                    onChange={onChangeHandler}
                                    defaultChecked={true}
                                />
                            </li>
                            <li>
                                <label
                                    htmlFor='sc'
                                    className='flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase
                                w-[3rem] h-[3rem] border-[1px] text-white checked:bg-white checked:text-[rgba(0, 0, 0, 0)] cursor-pointer mx-2'
                                >
                                    3
                                </label>
                                <input
                                    type='radio'
                                    name='technology'
                                    value='sc'
                                    id='sc'
                                    class='appearance-none'
                                    onChange={onChangeHandler}
                                    defaultChecked={true}
                                />
                            </li>
                            {/* <li
                                className='relative z-10 flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase text-[rgba(0, 0, 0, 0)]
                                w-[3rem] h-[3rem] bg-white cursor-pointer mx-2'
                                href='/destination'
                            >
                                2
                            </li>
                            <li
                                className='relative z-10 flex justify-center items-center
                                rounded-full text-2xl font-bell uppercase text-[rgba(0, 0, 0, 0)]
                                w-[3rem] h-[3rem] bg-white cursor-pointer mx-2'
                                href='/destination'
                            >
                                3
                            </li> */}
                        </ul>
                    </TechnologyItem>
                </div>
            </div>
        </>
    );
};

export default Technology;
