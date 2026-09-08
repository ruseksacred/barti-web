import { useState } from "react";
import logo from "../assets/logo_pom_przezr.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-inner">
                <a href="#start" className="logo" onClick={closeMenu}>
                    <img src={logo} alt="Barti Web" />
                </a>

                <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <a href="#start" onClick={closeMenu}>
                        Start
                    </a>

                    <a href="#uslugi" onClick={closeMenu}>
                        Usługi
                    </a>

                    <a href="#realizacje" onClick={closeMenu}>
                        Realizacje
                    </a>

                    <a href="#cennik" onClick={closeMenu}>
                        Cennik
                    </a>

                    <a href="#o-mnie" onClick={closeMenu}>
                        O mnie
                    </a>

                    <a href="#kontakt" onClick={closeMenu}>
                        Kontakt
                    </a>

                    <a
                        href="#kontakt"
                        className="nav-mobile-cta"
                        onClick={closeMenu}
                    >
                        Darmowa wycena
                    </a>
                </nav>

                <a href="#kontakt" className="nav-cta">
                    Darmowa wycena
                </a>

                <button
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Otwórz menu"
                    aria-expanded={menuOpen}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
};

export default Navbar;