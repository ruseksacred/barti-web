import logo from "../assets/logo_pom_przezr.png";

const Navbar = () => {
    return (
        <header className="navbar">
            <div className="navbar-inner">
                <a href="#start" className="logo">
                    <img src={logo} alt="Barti Web" />
                </a>

                <nav className="nav-links">
                    <a href="#start">Start</a>
                    <a href="#uslugi">Usługi</a>
                    <a href="#realizacje">Realizacje</a>
                    <a href="#cennik">Cennik</a>
                    <a href="#o-mnie">O mnie</a>
                    <a href="#kontakt">Kontakt</a>
                </nav>

                <a href="#kontakt" className="nav-cta">
                    Darmowa wycena
                </a>
            </div>
        </header>
    );
};

export default Navbar;