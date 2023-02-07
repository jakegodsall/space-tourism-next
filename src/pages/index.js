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
                <div className='mt-20 grid grid-rows-[40vh_45vh] md:grid-rows-[40vh_40vh] grid-cols-auto gap-10 items-center text-center'>
                    <div className='flex flex-col items-center'>
                        <h3 className='text-[#d0d6f9] uppercase font-barlow tracking-widest text-xl'>
                            So, you want to travel to{' '}
                            <span className='block text-white font-bell text-7xl md:text-9xl mt-5 transition-all duration-1000'>
                                space
                            </span>
                        </h3>

                        <p className='text-[#d0d6f9] px-5 font-light max-w-[450px] md:max-w-none my-5 md:w-[60%] md:tracking-wider md:leading-7 '>
                            Let's face it; if you want to go to space, you might as well genuinely
                            go to outer space and not hover kind of on the edge of it. Well sit
                            back, and relax because we'll give you a truly out of this world
                            experience!
                        </p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <Link
                            className='relative z-10 flex justify-center items-center rounded-full text-4xl font-bell uppercase text-[rgba(0, 0, 0, 0)] w-[220px] h-[220px] md:w-[260px] md:h-[260px] bg-white before:absolute before:w-0 before:h-0 before:backdrop-blur-md before:rounded-full hover:before:w-[300px] hover:before:h-[300px] transition-all duration-1000'
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
