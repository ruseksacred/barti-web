import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Process />
                <FAQ />
                <About />
                <Contact />
            </main>

            <Footer />
        </>
    );
}

export default App;