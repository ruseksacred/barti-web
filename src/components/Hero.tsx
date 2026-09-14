import studioDomDesktop from "../assets/studiodom-desktop.png";
import studioDomTablet from "../assets/studiodom-tablet.png";
import studioDomMobile from "../assets/studiodom-mobile.png";

const features = [
    {
        icon: "⚡",
        title: "Szybka realizacja",
        description: "Zwykle 7–14 dni",
    },
    {
        icon: "▣",
        title: "Responsywny projekt",
        description: "Telefon, tablet i komputer",
    },
    {
        icon: "◆",
        title: "Wsparcie po wdrożeniu",
        description: "Pomoc również po publikacji",
    },
];

const Hero = () => {
    return (
        <section className="hero" id="start">
            <div className="hero-inner">
                {/* LEWA STRONA */}
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
                        <a
                            href="#uslugi"
                            className="hero-btn hero-btn-primary"
                        >
                            Zobacz ofertę
                            <span>→</span>
                        </a>

                        <a
                            href="#kontakt"
                            className="hero-btn hero-btn-secondary"
                        >
                            Skontaktuj się
                        </a>
                    </div>

                    {/* FEATURES - DESKTOP / TABLET */}
                    <div className="hero-features hero-features-desktop">
                        {features.map((feature) => (
                            <div
                                className="hero-feature"
                                key={feature.title}
                            >
                                <span className="hero-feature-icon">
                                    {feature.icon}
                                </span>

                                <div>
                                    <strong>{feature.title}</strong>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* PRAWA STRONA */}
                <div className="hero-visual">
                    <div className="hero-glow" />

                    {/* DESKTOP */}
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

                    {/* TABLET */}
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

                    {/* MOBILE */}
                    <div className="hero-mobile-showcase">
                        <div className="mobile-preview">
                            <div className="phone-frame">
                                <div className="phone-camera" />

                                <div className="phone-frame-screen">
                                    <img
                                        src={studioDomMobile}
                                        alt="Mobilna wersja strony StudioDom"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="hero-mobile-features">
                            {features.map((feature) => (
                                <div
                                    className="hero-feature"
                                    key={feature.title}
                                >
                                    <span className="hero-feature-icon">
                                        {feature.icon}
                                    </span>

                                    <div>
                                        <strong>{feature.title}</strong>
                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;