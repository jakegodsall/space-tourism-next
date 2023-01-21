import Image from 'next/image';

import NavBar from './NavBar';

import styles from './Header.module.css';

const Header = () => {
    return (
        <header className={styles.header}>
            <Image src='/images/shared/logo.svg' width={50} height={50} />
            <NavBar />
        </header>
    );
};

export default Header;
