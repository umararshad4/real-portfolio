import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

const reuseableProjectVariants = {
    visible: { opacity: 1, translateY: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, translateY: 3 }
}
interface ProjectReuseableType {
    image: string
    heading: string
    title: string
    description: string
    order?: boolean
    url: string
}
const ProjectReuseable = ({ image, heading, title, description, order, url }: ProjectReuseableType): JSX.Element => {
    const controls = useAnimation()
    const [ref, inView] = useInView()
    useEffect(() => {
        if (inView) {
            controls.start('visible')
        }
    }, [ref, inView])

    return (
        <section className={`text-white px-12  md:flex ${order && 'flex-row-reverse'} items-center gap-x-32 min-h-[80vh]`}>
            <div><img src={image} alt="umar side pic" className="px-24 md:px-12 max-[100%] md:max-w-[25vw] max-h-[50vh] rounded-xl transition-all hover:scale-105" /></div>
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={reuseableProjectVariants}
                className="flex flex-col space-y-4 max-w-[30rem]">
                <h3 className="text-gray-600 uppercase">{heading}</h3>
                <h1 className="capitalize text-left text-2xl lg:text-4xl z-100 font-semibold">{title}</h1>
                <p className="capitalize text-gray-400 text-md lg:text-lg">{description}</p>
                <a href={url} target='_blank' className="text-blue-600 text-lg lg:text-xl my-4 cursor-pointer">View Project</a>
            </motion.div>
        </section>)
}

export default ProjectReuseable;