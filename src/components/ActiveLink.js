import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children, styles, activeStyles }) => {
    const router = useRouter();

    return (
        <Link href={href} className={router.asPath === href ? `${activeStyles}` : `${styles}`}>
            {children}
        </Link>
    );
};

export default ActiveLink;
