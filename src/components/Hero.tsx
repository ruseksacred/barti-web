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

                    <div className="devices-showcase">
                        <div className="laptop-mockup">
                            <div className="laptop-screen">
                                <div className="device-topbar">
                                    <div className="device-dots">
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                    <div className="device-url">twojafirma.pl</div>
                                </div>

                                <div className="device-site">
                                    <div className="device-site-nav">
                                        <strong>TwojaFirma</strong>

                                        <div>
                                            <span>Start</span>
                                            <span>Oferta</span>
                                            <span>Kontakt</span>
                                        </div>
                                    </div>

                                    <div className="device-site-hero">
                                        <div className="device-site-overlay">
                                            <p>REMONTY • WYKOŃCZENIA • WNĘTRZA</p>

                                            <h2>
                                                Wnętrza, w których
                                                <br />
                                                chce się mieszkać.
                                            </h2>

                                            <span className="device-site-description">
                                                Kompleksowe remonty i wykończenia wnętrz
                                                w Twojej okolicy.
                                            </span>

                                            <button>Sprawdź ofertę</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="laptop-base" />
                        </div>

                        <div className="phone-mockup">
                            <div className="phone-screen">
                                <div className="phone-notch" />

                                <div className="phone-site">
                                    <strong className="phone-brand">TwojeWnętrze</strong>

                                    <p className="phone-label">REMONTY I WNĘTRZA</p>

                                    <h3>
                                        Wnętrza, w których
                                        <br />
                                        chce się mieszkać.
                                    </h3>

                                    <button>Oferta</button>

                                    <div className="phone-preview-box">
                                        <div className="phone-preview-content">
                                            <span>Projekt</span>
                                            <span>Remont</span>
                                            <span>Realizacja</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-floating-card">
                        <span>↗</span>

                        <div>
                            <strong>Strona, która pracuje</strong>
                            <p>na Twój biznes</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;