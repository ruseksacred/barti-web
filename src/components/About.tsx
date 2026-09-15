import aboutPhoto from "../assets/13229 Rustyn cv.jpg";

const About = () => {
    return (
        <section className="about" id="o-mnie">
            <div className="about-inner">

                <div className="about-visual">
                    <div className="about-glow" />

                    <div className="about-photo-frame">
                        <img
                            src={aboutPhoto}
                            alt="Bartosz - Barti Web"
                        />
                    </div>
                </div>

                <div className="about-content">
                    <p className="about-eyebrow">O MNIE</p>

                    <h2>
                        Cześć, jestem <span>Bartosz.</span>
                    </h2>

                    <p>
                        Tworzę nowoczesne strony internetowe dla lokalnych firm,
                        które chcą wyglądać profesjonalnie w internecie i ułatwić
                        klientom kontakt.
                    </p>

                    <p>
                        Stawiam na prostą współpracę, przejrzysty design i rozwiązania
                        dopasowane do konkretnej firmy. Pomagam przejść od pierwszego
                        pomysłu aż do publikacji gotowej strony.
                    </p>

                    <div className="about-features">
                        <div className="about-feature">
                            <span>✓</span>
                            <div>
                                <strong>Nowoczesny design</strong>
                                <p>Przejrzysty wygląd dopasowany do charakteru firmy.</p>
                            </div>
                        </div>

                        <div className="about-feature">
                            <span>✓</span>
                            <div>
                                <strong>Responsywność</strong>
                                <p>Strona działa dobrze na telefonie, tablecie i komputerze.</p>
                            </div>
                        </div>

                        <div className="about-feature">
                            <span>✓</span>
                            <div>
                                <strong>Wsparcie po wdrożeniu</strong>
                                <p>Pomoc również po publikacji gotowej strony.</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;