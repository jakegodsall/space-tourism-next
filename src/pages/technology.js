import Head from 'next/head';

import Header from '@/components/Header';

const Technology = () => {
    return (
        <>
            <Head>
                <title>Technology</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop'>
                <Header />
                <div>
                    <h1>Technology</h1>
                </div>
            </div>
        </>
    );
};

export default Technology;
