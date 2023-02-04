import Link from 'next/link';
import Image from 'next/image';

import NavBar from './NavBar';

const Header = () => {
    return (
        <header className='flex justify-between items-center w-full pl-5 pt-7'>
            <Link href='/'>
                <Image src='/images/shared/logo.svg' width={50} height={50} alt='logo' />
            </Link>
            <NavBar />
        </header>
    );
};

export default Header;
