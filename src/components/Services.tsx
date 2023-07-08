import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const serviceVariants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 3 } },
    hidden: { opacity: 0, translateY: 3 }
}
const Services = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [ref, inView])

    return (
        <div className="flex items-center text-white min-h-[90vh] ">
            <motion.section
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={serviceVariants}
                className="min-h-full w-full space-y-[10rem] p-20 flex flex-col justify-center">
                <div className="text-center space-2">
                    <h3 className="uppercase text-gray-500 text-xl">what i do</h3>
                    <h1 className="text-5xl font-black tracking-wide">My services</h1>
                </div>
                <div
                    className="my-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-40">
                    <div
                        className="space-y-2 ">
                        <div className="">
                            <img src="/mern.png" alt="mern stack" className="h-20 w-40 rounded-lg " />
                        </div>
                        <h2 className="uppercase text-2xl font-semibold  text-blue-600">mern stack</h2>
                        <h2 className="capitalize text-2xl font-semibold ">fullstack development</h2>
                        <h2 className="capitalize text-2xl font-semibold ">responsive design</h2>
                    </div>
                    <div
                        className="space-y-1">
                        <div className="">
                            <img src="/next.png" alt="next js" className="h-24 w-40 rounded-lg" />
                        </div>
                        <h2 className="uppercase text-2xl font-semibold  text-blue-600">nextjs</h2>
                        <h2 className="capitalize text-2xl font-semibold ">fullstack development</h2>
                        <h2 className="capitalize text-2xl font-semibold ">responsive design</h2>
                    </div>
                    <div
                        className="space-y-1">
                        <div className="">
                            <img src="python.png" alt="python" className="h-28 w-40 rounded-lg " />
                        </div>
                        <h2 className="uppercase text-2xl font-semibold  text-blue-600">python</h2>
                        <h2 className="capitalize text-2xl font-semibold ">automation</h2>
                        <h2 className="capitalize text-2xl font-semibold ">web scraping</h2>
                    </div>
                </div>
            </motion.section>
        </div>
    )
}

export default Services;