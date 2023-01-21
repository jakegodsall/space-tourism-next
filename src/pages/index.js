import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Space Tourism</title>
            </Head>
            <h1 className={utilStyles.heading1}>Home</h1>
        </>
    );
}
