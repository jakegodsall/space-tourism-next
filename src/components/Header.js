import Image from 'next/image';

import NavBar from './NavBar';

import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className='flex justify-between items-center w-full pl-5 pt-7'>
            <Image src='/images/shared/logo.svg' width={50} height={50} />
            <NavBar />
        </header>
    );
};

export default Header;
