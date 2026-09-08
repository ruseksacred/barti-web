import studioDomDesktop from "../assets/studiodom-desktop.png";
import studioDomTablet from "../assets/studiodom-tablet.png";
import studioDomMobile from "../assets/studiodom-mobile.png";

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

                    <div className="desktop-preview">
                        <div className="browser-frame">
                            <div className="browser-frame-top">
                                <div className="browser-frame-dots">
                                    <span />
                                    <span />
                                    <span />
                                </div>

                                <div className="browser-frame-url">
                                    twojafirma.pl
                                </div>
                            </div>

                            <div className="browser-frame-screen">
                                <img
                                    src={studioDomDesktop}
                                    alt="Przykładowa strona internetowa StudioDom"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="tablet-preview">
                        <div className="tablet-frame">
                            <div className="tablet-camera" />

                            <div className="tablet-frame-screen">
                                <img
                                    src={studioDomTablet}
                                    alt="Tabletowa wersja strony StudioDom"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mobile-preview">
                        <div className="phone-frame">
                            <div className="phone-frame-notch" />

                            <div className="phone-frame-screen">
                                <img
                                    src={studioDomMobile}
                                    alt="Mobilna wersja strony StudioDom"
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;