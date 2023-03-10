import React, { useState } from 'react';

import Link from 'next/link';
import ActiveLink from './ActiveLink';
import Image from 'next/image';

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav((prevState) => !prevState);
    };

    return (
        <>
            <nav
                className='hidden md:flex w-[60%]
     items-center justify-between  backdrop-blur-2xl'
            >
                <ul className='flex w-full h-full justify-between mr-20 font-barlow uppercase text-white px-4'>
                    <li className='flex justify-center'>
                        <ActiveLink
                            href='/'
                            activeStyles={`flex justify-center w-[90%] py-8 border-b-4 border-white`}
                            styles={`flex justify-center py-8`}
                        >
                            <span className='font-bold mr-3'>00</span> Home
                        </ActiveLink>
                    </li>
                    <li className='flex justify-center'>
                        <ActiveLink
                            href='/destination'
                            activeStyles={`flex justify-center w-[90%] py-8 border-b-4 border-white`}
                            styles={`flex justify-center py-8`}
                        >
                            <span className='font-bold mr-3'>01</span> Destination
                        </ActiveLink>
                    </li>
                    <li className='flex justify-center'>
                        <ActiveLink
                            href='/crew'
                            activeStyles={`flex justify-center w-[90%] py-8 border-b-4 border-white`}
                            styles={`flex justify-center py-8`}
                        >
                            <span className='font-bold mr-3'>02</span> Crew
                        </ActiveLink>
                    </li>
                    <li className='flex justify-center'>
                        <ActiveLink
                            href='/technology'
                            activeStyles={`flex justify-center w-[90%] py-8 border-b-4 border-white`}
                            styles={`flex justify-center py-8`}
                        >
                            <span className='font-bold mr-3'>03</span> Technology
                        </ActiveLink>
                    </li>
                </ul>
            </nav>
            <Image
                onClick={handleNav}
                className='md:hidden mr-6 cursor-pointer'
                src='/images/shared/icon-hamburger.svg'
                width={25}
                height={25}
                alt='open navigation bar'
            />
            <div
                className={
                    nav
                        ? 'fixed w-[65%] h-screen right-0 top-0  backdrop-blur-2xl ease-in duration-500 z-20'
                        : 'fixed w-[65%] h-screen right-[-100%] top-0  backdrop-blur-2xl ease-in duration-500'
                }
            >
                <div className={nav ? 'flex flex-col p-6 h-screen' : 'hidden'}>
                    <Image
                        onClick={handleNav}
                        className='self-end cursor-pointer mt-5'
                        src='/images/shared/icon-close.svg'
                        width={25}
                        height={25}
                        alt='close navigation bar'
                    />
                    <ul className='flex h-[25%] flex-col justify-between font-barlow uppercase text-2xl mt-10 ml-10 text-[#fff]'>
                        <li>
                            <Link href='/'>
                                <span className='font-bold'>00</span> Home
                            </Link>
                        </li>
                        <li>
                            <Link href='/destination'>
                                <span className='font-bold'>01</span> Destination
                            </Link>
                        </li>
                        <li>
                            <Link href='/crew'>
                                <span className='font-bold'>02</span> Crew
                            </Link>
                        </li>
                        <li>
                            <Link href='/technology'>
                                <span className='font-bold'>03</span> Technology
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
