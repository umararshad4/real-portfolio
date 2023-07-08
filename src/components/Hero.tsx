import { useAnimation, motion } from 'framer-motion'
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
const heroVariants = {
    visible: { opacity: 1, scale: 1, transition: { duration: 1 } },
    hidden: { opacity: 0, scale: 0 }
};

const Hero = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [ref, inView])

    return (
        <motion.section
            initial="hidden"
            variants={heroVariants}
            animate={controls}
            ref={ref}
            className="min-h-[80vh] flex justify-center items-center">
            <div className="uppercase text-center space-y-4 mb-40">
                <h3 className="text-gray-400 texl-xl md:text-3xl tracking-widest font-bold ">hello! i'm</h3>
                <h1 className="text-white font-black text-5xl md:text-7xl tracking-widest">Umar Arshad</h1>
            </div>
        </motion.section>
    )
}

export default Hero;