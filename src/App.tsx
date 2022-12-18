import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ProjectReuseable from "./components/ProjectReuseable";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-black">
      <section className="max-w-5xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <ProjectReuseable image="/work-1.jpg.webp" heading="portfolio" title="portfolio website with full functionalities" description="this is the portfolio website with fully responsive and latest techniques and techs." url="https://umar-arshad-portfolio.netlify.app/" />
        <ProjectReuseable image="/work-2.jpg.webp" heading="tesla clone" title="tesla clone website with full responsiveness" description="this is the fully customized website with fully responsive and latest techniques and techs." order url="https://react-tesla-clone-project.netlify.app/" />
        <ProjectReuseable image="/work-3.jpg.webp" heading="Ecommerce" title="ecommerce website with full functionalities" description="this is the ecommerce website with fully responsive and latest techniques and techs." url="https://adonis-ecommerce-store.netlify.app/" />
        <ProjectReuseable image="/work-4.jpg.webp" heading="portfolio" title="portfolio website with full functionalities" description="this is the mern stack website with fully responsive and latest techniques and techs." order url="https://react-ts-portfolio4.netlify.app" />
        <ProjectReuseable image="/work-5.jpg.webp" heading="starbucks" title="starbucks website with full functionalities" description="this is the starbucks website with fully responsive and latest techniques and techs." url="https://starbucks-portfolio4.netlify.app" />
      </section>
      <Footer />
    </div>
  )
}

export default App;