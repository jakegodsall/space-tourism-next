import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    out: {
        opacity: 0,
        transition: {
            duration: 0.4,
        },
    },
    in: {
        opacity: 1,
        transition: {
            duration: 0.4,
        },
    },
};

const SectionTransition = ({ children, keyValue }) => {
    return (
        <AnimatePresence mode='wait'>
            <motion.div key={keyValue} variants={variants} animate='in' initial='out' exit='out'>
                {children}
            </motion.div>
        </AnimatePresence>
    );
};

export default SectionTransition;
