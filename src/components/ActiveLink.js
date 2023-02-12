import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const ActiveLink = ({ href, children }) => {
    const router = useRouter();

    return (
        <Link
            href={href}
            className={
                router.asPath === href
                    ? `flex justify-center w-[90%] py-8 border-b-4 border-white`
                    : `flex justify-center py-8`
            }
        >
            {children}
        </Link>
    );
};

export default ActiveLink;
