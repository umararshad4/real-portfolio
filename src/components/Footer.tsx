import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const Footer = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('visible');
        }
    }, [controls, inView]);

    return (
        <footer className="text-white px-12 md:px-8 flex-col flex justify-center items-center gap-x-32 min-h-[70vh] space-y-8">
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={footerVariants}
                className="flex flex-col justify-center items-center space-y-8" // Added classes for layout
            >
                <div className="flex space-x-4">
                    <div className="w-16 h-16 rounded-full bg-slate-800 flex justify-center items-center cursor-pointer">
                        <a href="https://github.com/umararshad4" target="_blank">
                            <img src="/github.png" alt="twitter logo" className="h-8 w-8" />
                        </a>
                    </div>
                    <div className=" w-16 h-16 rounded-full bg-slate-800 flex justify-center items-center cursor-pointer">
                        <a href="https://twitter.com/muhamma64170631" target="_blank">
                            <img src="/twitter.png" alt="github logo" className="w-8 h-8" />
                        </a>
                    </div>
                </div>
                <h2 className="font-semibold text-5xl">contact us</h2>
                <h2 className="text-xl text-blue-600">mumararshad4444@gmail.com</h2>
                <p>Copyright ©2023 All rights reserved | This template is made with  by Colorlib</p>
            </motion.div>
        </footer>
    )
}

export default Footer;