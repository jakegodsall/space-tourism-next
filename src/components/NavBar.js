import Link from 'next/link';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/destination'>Destination</Link>
                </li>
                <li>
                    <Link href='/crew'>Crew</Link>
                </li>
                <li>
                    <Link href='/technology'>Technology</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
