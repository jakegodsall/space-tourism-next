import Head from 'next/head';

import styles from '.';

export default function Home() {
    return (
        <>
            <Head>
                <title>Space Tourism</title>
            </Head>

            <div>
                <h3>
                    So, you want to travel to <span>space</span>
                </h3>

                <p>
                    Let's face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we'll give you a truly out of this world experience!
                </p>
            </div>
        </>
    );
}
