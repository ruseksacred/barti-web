import warsztatDesktop from "../assets/warsztat-desktop.png";
import warsztatTablet from "../assets/warsztat-tablet.png";
import warsztatMobile from "../assets/warsztat-mobile.png";

const Portfolio = () => {
    return (
        <section className="portfolio" id="realizacje">
            <div className="portfolio-inner">
                <div className="portfolio-heading">
                    <p className="portfolio-eyebrow">REALIZACJE</p>

                    <h2>Projekt, który już działa.</h2>

                    <p>
                        Zamiast pokazywać przypadkowe makiety, wolę prezentować
                        projekty, które faktycznie funkcjonują i rozwiązują
                        konkretne potrzeby biznesowe.
                    </p>
                </div>

                <article className="portfolio-project">
                    <div className="portfolio-preview">
                        <div className="portfolio-glow" />

                        {/* DESKTOP */}
                        <div className="portfolio-desktop">
                            <div className="portfolio-browser">
                                <div className="portfolio-browser-top">
                                    <div className="portfolio-browser-dots">
                                        <span />
                                        <span />
                                        <span />
                                    </div>

                                    <div className="portfolio-browser-url">
                                        warsztatnadrukow.com
                                    </div>
                                </div>

                                <div className="portfolio-browser-screen">
                                    <img
                                        src={warsztatDesktop}
                                        alt="Warsztat Nadruków - wersja desktopowa"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* TABLET */}
                        <div className="portfolio-tablet">
                            <div className="portfolio-tablet-frame">
                                <div className="portfolio-tablet-camera" />

                                <div className="portfolio-tablet-screen">
                                    <img
                                        src={warsztatTablet}
                                        alt="Warsztat Nadruków - wersja tabletowa"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* MOBILE */}
                        <div className="portfolio-mobile">
                            <div className="portfolio-phone">
                                <div className="portfolio-phone-screen">
                                    <img
                                        src={warsztatMobile}
                                        alt="Warsztat Nadruków - wersja mobilna"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="portfolio-content">
                        <div className="portfolio-type">
                            Sklep internetowy
                        </div>

                        <h3>Warsztat Nadruków</h3>

                        <p className="portfolio-description">
                            Sklep internetowy dla firmy zajmującej się
                            nadrukami i haftem. Projekt obejmuje prezentację
                            produktów, kategorie, proces zakupowy oraz wersję
                            dostosowaną do urządzeń mobilnych.
                        </p>

                        <div className="portfolio-tags">
                            <span>E-commerce</span>
                            <span>Produkty</span>
                            <span>Kategorie</span>
                            <span>Responsywność</span>
                        </div>

                        <a
                            href="https://warsztatnadrukow.com"
                            target="_blank"
                            rel="noreferrer"
                            className="portfolio-button"
                        >
                            Zobacz stronę
                            <span>↗</span>
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Portfolio;