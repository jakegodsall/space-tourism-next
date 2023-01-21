import Link from 'next/link';

import styles from './NavBar.module.css';
import utilStyles from '../styles/utils.module.css';

const NavBar = () => {
    return (
        <nav className={styles.navBar}>
            <ul>
                <li>
                    <Link className={utilStyles.navText} href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link className={utilStyles.navText} href='/destination'>
                        Destination
                    </Link>
                </li>
                <li>
                    <Link className={utilStyles.navText} href='/crew'>
                        Crew
                    </Link>
                </li>
                <li>
                    <Link className={utilStyles.navText} href='/technology'>
                        Technology
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
