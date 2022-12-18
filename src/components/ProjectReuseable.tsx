interface ProjectReuseableType {
    image: string
    heading: string
    title: string
    description: string
    order?: boolean
    url: string
}
const ProjectReuseable = ({ image, heading, title, description, order, url }: ProjectReuseableType): JSX.Element => {
    return (
        <section className={`text-white flex ${order && 'flex-row-reverse'} items-center gap-x-32 min-h-[80vh]`}>
            <div><img src={image} alt="umar side pic" className="flex max-w-[25vw] max-h-[70vh] rounded-xl transition-all hover:scale-105" /></div>
            <div className="flex flex-col space-y-4 max-w-[30rem]">
                <h3 className="text-gray-600 uppercase">{heading}</h3>
                <h1 className="capitalize text-left text-4xl z-100 font-semibold">{title}</h1>
                <p className="capitalize text-gray-400 text-lg">{description}</p>
                <a href={url} target='_blank' className="text-blue-600 text-xl my-4 cursor-pointer">View Project</a>
            </div>
        </section>)
}

export default ProjectReuseable;