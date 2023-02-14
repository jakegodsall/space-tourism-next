import React, { useState } from 'react';

import Head from 'next/head';

import Header from '@/components/Header';

import CrewItem from '@/components/CrewItem';

const CREW_DATA = [
    {
        accessKey: 'dh',
        name: 'Douglas Hurley',
        images: {
            png: '/images/crew/image-douglas-hurley.png',
            webp: '/images/crew/image-douglas-hurley.webp',
        },
        role: 'Commander',
        bio: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    },
    {
        accessKey: 'ms',
        name: 'Mark Shuttleworth',
        images: {
            png: '/images/crew/image-mark-shuttleworth.png',
            webp: '/images/crew/image-mark-shuttleworth.webp',
        },
        role: 'Mission Specialist',
        bio: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    },
    {
        accessKey: 'vg',
        name: 'Victor Glover',
        images: {
            png: '/images/crew/image-victor-glover.png',
            webp: '/images/crew/image-victor-glover.webp',
        },
        role: 'Pilot',
        bio: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    },
    {
        accessKey: 'aa',
        name: 'Anousheh Ansari',
        images: {
            png: '/images/crew/image-anousheh-ansari.png',
            webp: '/images/crew/image-anousheh-ansari.webp',
        },
        role: 'Flight Engineer',
        bio: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
    },
];

const Crew = () => {
    const [selectedCrewMember, setSelectedCrewMember] = useState('dh');

    const selectedData = CREW_DATA.filter((member) => member.accessKey === selectedCrewMember)[0];

    const onChangeHandler = (e) => {
        setSelectedCrewMember(e.target.value);
        e.target.checked = true;
    };

    return (
        <>
            <Head>
                <title>Crew</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop'>
                <Header />
                <CrewItem data={selectedData}>
                    <nav className='flex w-[100px] justify-between'>
                        {CREW_DATA.map((data, key) => {
                            return (
                                <input
                                    type='radio'
                                    name='crewMember'
                                    key={key}
                                    value={data.accessKey}
                                    onChange={onChangeHandler}
                                    className='appearance-none w-[1rem] h-[1rem] bg-[#555] rounded-full cursor-pointer checked:bg-[#fff] transition-all duration-500'
                                    defaultChecked={CREW_DATA.indexOf(data) === 0}
                                />
                            );
                        })}
                    </nav>
                </CrewItem>
            </div>
        </>
    );
};

export default Crew;
