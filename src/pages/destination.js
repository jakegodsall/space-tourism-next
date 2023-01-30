import React, { useState } from 'react';

import Head from 'next/head';
import Header from '@/components/Header';
import DestinationItem from '@/components/DestinationItem';

const DEST_DATA = [
    {
        name: 'moon',
        images: {
            png: './assets/destination/image-moon.png',
            webp: './assets/destination/image-moon.webp',
        },
        description:
            'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400 km',
        travel: '3 days',
    },
    {
        name: 'mars',
        images: {
            png: './assets/destination/image-mars.png',
            webp: './assets/destination/image-mars.webp',
        },
        description:
            'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 mil. km',
        travel: '9 months',
    },
    {
        name: 'europa',
        images: {
            png: './assets/destination/image-europa.png',
            webp: './assets/destination/image-europa.webp',
        },
        description:
            'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 mil. km',
        travel: '3 years',
    },
    {
        name: 'titan',
        images: {
            png: './assets/destination/image-titan.png',
            webp: './assets/destination/image-titan.webp',
        },
        description:
            'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 bil. km',
        travel: '7 years',
    },
];

const Destination = () => {
    const [selectedDestination, setSelectedDestination] = useState('mars');

    // get the data for the destination stored in selectedDestination
    const data = DEST_DATA.filter((dest) => {
        return dest.name === selectedDestination;
    })[0];

    console.log(data);

    // list all destination names
    const destinationName = DEST_DATA.map((dest) => dest.name.toLowerCase());

    const destinationClickHandler = (e) => {
        const dest = e.target.value;
        console.log(dest);
        setSelectedDestination(e.target.value);
    };

    return (
        <>
            <Head>
                <title>Destination</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop'>
                <Header />

                <div className='flex flex-col items-center'>
                    <p className='text-white uppercase font-barlow tracking-widest'>
                        <span className='text-[#888]'>01</span> Pick your destination
                    </p>
                    <ul className='flex w-[60%] justify-between'>
                        {destinationName.map((dest, idx) => {
                            return (
                                <li
                                    className='text-[#d0d6f9] font-barlow uppercase cursor-pointer'
                                    key={idx}
                                    onClick={destinationClickHandler}
                                >
                                    {dest}
                                </li>
                            );
                        })}
                    </ul>
                    <DestinationItem dest={data} />
                </div>
            </div>
        </>
    );
};

export default Destination;
