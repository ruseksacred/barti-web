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

                    <div className="browser-showcase">
                        <div className="browser-window">
                            <div className="browser-topbar">
                                <div className="browser-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <div className="browser-url">
                                    studiodom.pl
                                </div>
                            </div>

                            <div className="browser-content">
                                <div className="browser-site-nav">
                                    <strong>StudioDom</strong>

                                    <div>
                                        <span>Start</span>
                                        <span>O nas</span>
                                        <span>Usługi</span>
                                        <span>Realizacje</span>
                                        <span>Kontakt</span>
                                    </div>
                                </div>

                                <div className="browser-site-hero">
                                    <div className="browser-site-overlay">
                                        <p>WNĘTRZA • PROJEKT • REALIZACJA</p>

                                        <h2>
                                            Piękne wnętrza,
                                            <br />
                                            lepsze życie.
                                        </h2>

                                        <span className="browser-site-description">
                                            Projektujemy funkcjonalne i ponadczasowe wnętrza,
                                            które zachwycają każdego dnia.
                                        </span>

                                        <button>Zobacz realizacje</button>
                                    </div>
                                </div>

                                <div className="browser-site-features">
                                    <div>
                                        <strong>01</strong>
                                        <span>Projekt</span>
                                    </div>

                                    <div>
                                        <strong>02</strong>
                                        <span>Realizacja</span>
                                    </div>

                                    <div>
                                        <strong>03</strong>
                                        <span>Doradztwo</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;