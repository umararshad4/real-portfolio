import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import ReuseableCompAbstraction from "./components/ReuseableCompAbstraction";
import Services from "./components/Services";

const App = () => {
  return (
    <div className="bg-black overflow-x-hidden">
      <section className="max-w-5xl mx-auto">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <ReuseableCompAbstraction />
      </section>
      <Footer />
    </div>
  )
}

export default App;