import Link from 'next/link';
import Image from 'next/image';

import styles from './NavBar.module.scss';

const NavBar = () => {
    return (
        <>
            <nav
                className='hidden md:flex w-[60%]
     items-center justify-between bg-gray-200 p-4'
            >
                <ul className='flex w-full justify-between mr-20 font-barlow'>
                    <li>
                        <Link href='/'>Home</Link>
                    </li>
                    <li>
                        <Link href='/destination'>Destination</Link>
                    </li>
                    <li>
                        <Link href='/crew'>Crew</Link>
                    </li>
                    <li>
                        <Link href='/technology'>Technology</Link>
                    </li>
                </ul>
            </nav>
            <Image
                className='mr-6 cursor-pointer'
                src='/images/shared/icon-hamburger.svg'
                width={35}
                height={35}
                alt='open navigation bar'
            />
            <div className='fixed w-[65%] h-screen right-0 top-0 bg-gray-400'>
                <div className='flex flex-col p-6'>
                    <Image
                        className='self-end'
                        src='/images/shared/icon-close.svg'
                        width={35}
                        height={35}
                        alt='close navigation bar'
                    />
                    <ul className='font-barlow uppercase'>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/destination'>Destination</Link>
                        </li>
                        <li>
                            <Link href='/crew'>Crew</Link>
                        </li>
                        <li>
                            <Link href='/technology'>Technology</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NavBar;
