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

    console.log(data);

    return (
        <>
            <Head>
                <title>Technology</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop'>
                <Header />
                <div>
                    <TechnologyItem
                        name={data.name}
                        description={data.description}
                        portrait={data.images.portrait}
                        landscape={data.images.landscape}
                    />
                </div>
            </div>
        </>
    );
};

export default Technology;
