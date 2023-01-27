import Head from 'next/head';
import Link from 'next/link';

import Header from '@/components/Header';

import styles from '.';

export default function Home() {
    return (
        <>
            <Head>
                <title>Space Tourism</title>
            </Head>

            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop'>
                <Header />
                <div className='grid grid-cols-2 grid-rows-auto items-center'>
                    <div className='flex flex-col'>
                        <h3 className='text-[#d0d6f9]'>
                            So, you want to travel to{' '}
                            <span className='text-white font-bell uppercase text-9xl'>space</span>
                        </h3>

                        <p className='text-[#d0d6f9]'>
                            Let's face it; if you want to go to space, you might as well genuinely
                            go to outer space and not hover kind of on the edge of it. Well sit
                            back, and relax because we'll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link
                            className='relative z-10 flex justify-center items-center rounded-full text-4xl font-bell uppercase text-[rgba(0, 0, 0, 0)] w-[274px] h-[274px] bg-white before:absolute before:w-0 before:h-0 before:backdrop-blur-md before:rounded-full hover:before:w-[300px] hover:before:h-[300px]'
                            href='/destination'
                        >
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
