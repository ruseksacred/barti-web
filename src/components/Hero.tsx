import studioDomDesktop from "../assets/studiodom-desktop.png";

const Hero = () => {
    return (
        <section className="hero" id="start">
            <div className="hero-inner">

                <div className="hero-content">
                    <p className="hero-eyebrow">
                        TWOJA FIRMA. WIĘKSZE MOŻLIWOŚCI.
                    </p>

                    <h1 className="hero-title">
                        Nowoczesne strony internetowe dla{" "}
                        <span>lokalnych firm</span>
                    </h1>

                    <p className="hero-description">
                        Pomagam małym i lokalnym firmom zaistnieć w internecie.
                        Tworzę proste, nowoczesne i skuteczne strony WWW, które
                        budują zaufanie i pomagają zdobywać nowych klientów.
                    </p>

                    <div className="hero-buttons">
                        <a href="#uslugi" className="hero-btn hero-btn-primary">
                            Zobacz ofertę
                            <span>→</span>
                        </a>

                        <a href="#kontakt" className="hero-btn hero-btn-secondary">
                            Skontaktuj się
                        </a>
                    </div>

                    <div className="hero-features">
                        <div className="hero-feature">
                            <span className="hero-feature-icon">⚡</span>

                            <div>
                                <strong>Szybka realizacja</strong>
                                <p>Zwykle 7–14 dni</p>
                            </div>
                        </div>

                        <div className="hero-feature">
                            <span className="hero-feature-icon">▣</span>

                            <div>
                                <strong>Responsywny projekt</strong>
                                <p>Telefon, tablet i komputer</p>
                            </div>
                        </div>

                        <div className="hero-feature">
                            <span className="hero-feature-icon">◆</span>

                            <div>
                                <strong>Wsparcie po wdrożeniu</strong>
                                <p>Pomoc również po publikacji</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-glow" />

                    <div className="device-frame">
                        <picture>
                            <source
                                media="(max-width: 600px)"
                                srcSet={studioDomDesktop}
                            />

                            <source
                                media="(max-width: 950px)"
                                srcSet={studioDomDesktop}
                            />

                            <img
                                src={studioDomDesktop}
                                alt="Przykładowa realizacja strony internetowej StudioDom"
                                className="device-screen-image"
                            />
                        </picture>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;