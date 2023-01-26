import Head from 'next/head';

import Header from '@/components/Header';

const Crew = () => {
    return (
        <>
            <Head>
                <title>Crew</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop'>
                <Header />
                <div>
                    <h1>Destination</h1>
                </div>
            </div>
        </>
    );
};

export default Crew;
