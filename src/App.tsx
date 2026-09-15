import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import FAQ from "./components/FAQ";
import About from "./components/About";


function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Services />
                <FAQ />
                <About />
                <Contact />
            </main>
            <Footer />
        </>
    );
}

export default App;
