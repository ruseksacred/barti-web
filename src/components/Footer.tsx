const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-brand">
                    <strong>Barti Web</strong>
                    <p>Nowoczesne strony internetowe dla lokalnych firm.</p>
                </div>

                <nav className="footer-links">
                    <a href="#jak-to-dziala">ToProste!</a>
                    <a href="#uslugi">Usługi</a>
                    <a href="#realizacje">Realizacje</a>
                    <a href="#kontakt">Kontakt</a>
                </nav>

                <div className="footer-contact">
                    <a href="mailto:kontakt@bartiweb.pl">kontakt@bartiweb.pl</a>
                    <a href="tel:+48123456789">+48 123 456 789</a>
                </div>
            </div>

            <div className="footer-bottom">
                © 2026 Barti Web. Wszystkie prawa zastrzeżone.
            </div>
        </footer>
    );
};

export default Footer;