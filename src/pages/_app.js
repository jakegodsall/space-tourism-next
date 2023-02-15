import Header from '@/components/Header';
import '@/styles/globals.scss';
import '../styles/transition.css';

import PageLoadTransition from '@/components/transitions/PageLoadTransition';

export default function App({ Component, pageProps }) {
    return (
        <PageLoadTransition>
            <Component {...pageProps} />;
        </PageLoadTransition>
    );
}
