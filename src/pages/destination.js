import Head from 'next/head';

import Header from '@/components/Header';

const Destination = () => {
    return (
        <>
            <Head>
                <title>Destination</title>
            </Head>
            <div className='w-auto h-screen bg-center bg-cover bg-no-repeat bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop'>
                <Header />
                <div>
                    <h1>Destination</h1>
                </div>
            </div>
        </>
    );
};

export default Destination;
