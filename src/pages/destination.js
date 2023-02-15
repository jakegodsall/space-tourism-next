import React, { useState } from 'react';
import Head from 'next/head';

import Header from '@/components/Header';
import DestinationItem from '@/components/DestinationItem';
import SectionTransition from '@/components/transitions/SectionTransition';

const DEST_DATA = [
    {
        name: 'moon',
        images: {
            png: '/images/destination/image-moon.png',
            webp: '/images/destination/image-moon.webp',
        },
        description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days',
    },
    {
        name: 'mars',
        images: {
            png: '/images/destination/image-mars.png',
            webp: '/images/destination/image-mars.webp',
        },
        description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months',
    },
    {
        name: 'europa',
        images: {
            png: '/images/destination/image-europa.png',
            webp: '/images/destination/image-europa.webp',
        },
        description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years',
    },
    {
        name: 'titan',
        images: {
            png: '/images/destination/image-titan.png',
            webp: '/images/destination/image-titan.webp',
        },
        description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years',
    },
];

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState('moon');

    // get the data for the destination stored in selectedDestination
    const data = DEST_DATA.filter((dest) => {
        return dest.name === selectedDestination;
    })[0];

    // list all destination names for nav bar
    const destinationName = DEST_DATA.map((dest) => dest.name.toLowerCase());

    const destinationClickHandler = (e) => {
        setSelectedDestination(e.target.innerHTML);
    };

    return (
        <>
            <Head>
                <title>Destination</title>
            </Head>
            <div className='w-screen h-screen bg-center bg-cover bg-no-repeat bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop items-center'>
                <Header />

                <SectionTransition keyValue={data.name}>
                    <DestinationItem dest={data} keyValue={data.name}>
                        <nav className='w-full flex justify-center'>
                            <ul className='flex w-[60%] justify-between my-10'>
                                {destinationName.map((dest, idx) => {
                                    return (
                                        <li
                                            className='text-[#d0d6f9] font-barlow uppercase cursor-pointer tracking-widest'
                                            key={idx}
                                            onClick={destinationClickHandler}
                                        >
                                            {dest}
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </DestinationItem>
                </SectionTransition>
            </div>
        </>
    );
};

export default Destination;
