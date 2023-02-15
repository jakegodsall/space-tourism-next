import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const variants = {
    out: {
        opacity: 0,
        y: 40,
        transition: {
            duration: 0.75,
        },
    },
    in: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            delay: 0.5,
        },
    },
};

const PageLoadTransition = ({ children }) => {
    const { asPath } = useRouter();

    return (
        <div className='w-full h-full'>
            <AnimatePresence initial={false} mode='wait' className='w-full h-full'>
                <motion.div
                    key={asPath}
                    variants={variants}
                    animate='in'
                    initial='out'
                    exit='out'
                    className='w-full h-full'
                >
                    {children}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default PageLoadTransition;
