import Header from '@/components/Header';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
    return (
        <div className='w-screen h-screen '>
            <Header />
            <Component {...pageProps} />
        </div>
    );
}
