import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Process from "./components/Process";
import FAQ from "./components/FAQ";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import PrivacyPolicy from "./pages/PrivacyPolicy";

function HomePage() {
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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                    path="/polityka-prywatnosci"
                    element={<PrivacyPolicy />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;