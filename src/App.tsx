import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services"
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <Navbar />

            <main>
                <Hero />
                <Services />

            </main>
            <Footer />
        </>
    );
}

export default App;
