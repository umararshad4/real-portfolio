import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
const aboutVariants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, translateY: 3 }
}

const About = () => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [ref, inView])

    return (
        <section className="text-white px-16 sm:px-8 md:px-20 space-y-20 md:space-y-0 md:flex md:justify-center md:items-center md:gap-x-32 min-h-[90vh]">
            <motion.div
                initial="hidden"
                animate={controls}
                variants={aboutVariants}
                className='text-center md:text-left'
                ref={ref}
            ><img src="/umar-pic.jpg" alt="umar side pic" className="object-cover w-[50rem] h-[40h]  md:w-[30rem] md:h-[70vh] rounded-xl " /></motion.div>
            <motion.div
                initial="hidden"
                animate={controls}
                variants={aboutVariants}
                ref={ref}

                className="flex flex-col text-center">
                <div className="mb-4 sm:mb-12 lg:mb-20">
                    <h1 className="text-gray-900 uppercase font-black opacity-100 text-[3rem] sm:text-[5rem] lg:text-[7rem] text-center md:text-left z-10 leading-3">about</h1>
                    <h2 className="capitalize text-center md:text-left text-md sm:text-xl lg:text-4xl z-100 ">hi! i'm umar arshad</h2>
                </div>
                <div>
                    <p className="capitalize text-gray-400 text-center text-sm sm:text-md lg:text-lg max-w-[30rem]">Love to make creative animational website.Create beautiful websites that can scale with modern technologies.</p>
                    <a href='/umar-resume.pdf' download className="text-blue-600 text-xl my-4 cursor-pointer" >Download Resume</a>
                </div>
                <div className="flex justify-center space-x-4 py-4 md:items-center">
                    <div className=" w-16 h-16 rounded-full bg-slate-800 flex justify-center items-center cursor-pointer">
                        <a href="https://twitter.com/muhamma64170631" target="_blank">
                            <img src="/twitter.png" alt="github logo" className="w-8 h-8" />
                        </a>
                    </div>
                    <div className=" w-16 h-16 rounded-full bg-slate-800 flex justify-center items-center cursor-pointer">
                        <a href="https://github.com/umararshad4" target="_blank">
                            <img src="/github.png" alt="twitter logo" className="h-8 w-8" />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className="text-md md:text-xl my-2">Contact me here!</h2>
                    <h3 className="text-md md:text-lg">Email: <span className="text-blue-600">mumararshad4444@gmail.com</span></h3>
                    <h3 className="text-md md:text-lg">Phone: <span className="text-blue-600">+923144360990</span></h3>
                </div>
            </motion.div>
        </section>
    )
}

export default About;