import Header from '@/components/Header';
import '@/styles/globals.scss';
import '../styles/transition.css';

import Transition from '@/components/Transition';

export default function App({ Component, pageProps }) {
    return (
        <Transition>
            <Component {...pageProps} />;
        </Transition>
    );
}
