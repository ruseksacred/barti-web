import logo from "../assets/logo_pom_przezr.png";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">

                <a href="#start" className="footer-logo">
                    <img src={logo} alt="Barti Web" />
                </a>

                <nav className="footer-links">
                    <a href="#jak-to-dziala" className="footer-process">
                        ToProste!
                    </a>
                    <a href="#uslugi">Usługi</a>
                    <a href="#realizacje">Realizacje</a>
                    <a href="#cennik">Cennik</a>
                    <a href="#o-mnie">O mnie</a>
                    <a href="#kontakt">Kontakt</a>
                </nav>

                <div className="footer-bottom">
                    © 2026 Barti Web. Wszystkie prawa zastrzeżone.
                </div>

            </div>
        </footer>
    );
};

export default Footer;