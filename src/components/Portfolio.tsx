import {
    useEffect,
    useRef,
    useState,
    type TouchEvent,
} from "react";

import warsztatDesktop from "../assets/warsztat-desktop.png";
import warsztatTablet from "../assets/warsztat-tablet.png";
import warsztatMobile from "../assets/warsztat-mobile.png";

import roweryDesktop from "../assets/rowery-desktop.png";
import roweryTablet from "../assets/rowery-tablet.png";
import roweryMobile from "../assets/rowery-mobile.png";

type Project = {
    name: string;
    type: string;
    description: string;
    goal: string;
    work: string;
    tags: string[];
    website: string;
    displayUrl: string;
    desktop: string;
    tablet: string;
    mobile: string;
};

const projects: Project[] = [
    {
        name: "Warsztat Nadruków",
        type: "Sklep internetowy",

        description:
            "Sklep internetowy dla firmy zajmującej się nadrukami i haftem, przygotowany z myślą o wygodnym prezentowaniu oferty oraz sprzedaży online.",

        goal:
            "Stworzenie miejsca, w którym klient może poznać ofertę firmy, przeglądać produkty i wygodnie rozpocząć proces zakupowy.",

        work:
            "Przygotowanie responsywnego sklepu internetowego, struktury kategorii, prezentacji produktów oraz interfejsu dopasowanego do komputerów, tabletów i telefonów.",

        tags: [
            "E-commerce",
            "Produkty",
            "Kategorie",
            "Responsywność",
        ],

        website: "https://warsztatnadrukow.com",
        displayUrl: "warsztatnadrukow.com",

        desktop: warsztatDesktop,
        tablet: warsztatTablet,
        mobile: warsztatMobile,
    },

    {
        name: "Rowery Latoszyn Zdrój",
        type: "Strona usługowa",

        description:
            "Nowoczesna strona internetowa przygotowana dla lokalnej wypożyczalni rowerów w Latoszynie-Zdroju.",

        goal:
            "Czytelne przedstawienie oferty wypożyczalni oraz ułatwienie klientom znalezienia informacji o rowerach, cenach, trasach i kontakcie.",

        work:
            "Przygotowanie strony prezentującej ofertę rowerów, cennik, propozycje tras, kontakt oraz pełną wersję responsywną na urządzenia mobilne.",

        tags: [
            "Strona firmowa",
            "Oferta",
            "Trasy",
            "Responsywność",
        ],

        /*
         * Jeśli masz inny adres strony,
         * zmień tylko tę wartość.
         */
        website: "https://rowerylatoszynzdroj.pl",
        displayUrl: "rowerylatoszynzdroj.pl",

        desktop: roweryDesktop,
        tablet: roweryTablet,
        mobile: roweryMobile,
    },
];

const AUTOPLAY_TIME = 7000;
const SWIPE_DISTANCE = 50;

const Portfolio = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [reducedMotion, setReducedMotion] = useState(false);

    const touchStartX = useRef<number | null>(null);

    const project = projects[activeIndex];

    /*
     * Sprawdzenie ustawienia ograniczenia animacji
     * w systemie użytkownika.
     */
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const updateReducedMotion = () => {
            setReducedMotion(mediaQuery.matches);
        };

        updateReducedMotion();

        mediaQuery.addEventListener(
            "change",
            updateReducedMotion
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                updateReducedMotion
            );
        };
    }, []);

    /*
     * Autoplay.
     *
     * Ponieważ activeIndex jest w dependencies,
     * każde ręczne przełączenie automatycznie
     * resetuje licznik 7 sekund.
     */
    useEffect(() => {
        if (isPaused || reducedMotion) {
            return;
        }

        const timer = window.setTimeout(() => {
            setActiveIndex((current) =>
                (current + 1) % projects.length
            );
        }, AUTOPLAY_TIME);

        return () => {
            window.clearTimeout(timer);
        };
    }, [activeIndex, isPaused, reducedMotion]);

    const nextProject = () => {
        setActiveIndex((current) =>
            (current + 1) % projects.length
        );
    };

    const previousProject = () => {
        setActiveIndex((current) =>
            (current - 1 + projects.length) %
            projects.length
        );
    };

    const goToProject = (index: number) => {
        setActiveIndex(index);
    };

    const handleTouchStart = (
        event: TouchEvent<HTMLElement>
    ) => {
        touchStartX.current =
            event.touches[0].clientX;
    };

    const handleTouchEnd = (
        event: TouchEvent<HTMLElement>
    ) => {
        if (touchStartX.current === null) {
            return;
        }

        const touchEndX =
            event.changedTouches[0].clientX;

        const distance =
            touchStartX.current - touchEndX;

        if (distance > SWIPE_DISTANCE) {
            nextProject();
        }

        if (distance < -SWIPE_DISTANCE) {
            previousProject();
        }

        touchStartX.current = null;
    };

    const formattedCurrent = String(
        activeIndex + 1
    ).padStart(2, "0");

    const formattedTotal = String(
        projects.length
    ).padStart(2, "0");

    return (
        <section
            className="portfolio"
            id="realizacje"
        >
            <div className="portfolio-inner">
                <div className="portfolio-heading">
                    <div>
                        <p className="portfolio-eyebrow">
                            REALIZACJE
                        </p>

                        <h2>
                            Projekty, które już działają.
                        </h2>
                    </div>

                    <p>
                        Tworzę strony dopasowane do
                        konkretnej firmy, jej branży i
                        klientów. Zobacz wybrane
                        realizacje.
                    </p>
                </div>

                <div
                    className="portfolio-slider"
                    onMouseEnter={() =>
                        setIsPaused(true)
                    }
                    onMouseLeave={() =>
                        setIsPaused(false)
                    }
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <article
                        className="portfolio-project"
                        key={project.name}
                    >
                        {/* =========================
                            PREVIEW
                        ========================= */}

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
                                            {
                                                project.displayUrl
                                            }
                                        </div>
                                    </div>

                                    <div className="portfolio-browser-screen">
                                        <img
                                            src={
                                                project.desktop
                                            }
                                            alt={`${project.name} - wersja desktopowa`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* TABLET */}

                            <div className="portfolio-tablet">
                                <div className="portfolio-tablet-frame">
                                    <div className="portfolio-tablet-screen">
                                        <img
                                            src={
                                                project.tablet
                                            }
                                            alt={`${project.name} - wersja tabletowa`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* MOBILE */}

                            <div className="portfolio-mobile">
                                <div className="portfolio-phone">
                                    <div className="portfolio-phone-screen">
                                        <img
                                            src={
                                                project.mobile
                                            }
                                            alt={`${project.name} - wersja mobilna`}
                                            loading="lazy"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =========================
                            CONTENT
                        ========================= */}

                        <div className="portfolio-content">
                            <div className="portfolio-type">
                                {project.type}
                            </div>

                            <h3>{project.name}</h3>

                            <p className="portfolio-description">
                                {project.description}
                            </p>

                            <div className="portfolio-case">
                                <div className="portfolio-case-item">
                                    <span>
                                        Cel projektu
                                    </span>

                                    <p>
                                        {project.goal}
                                    </p>
                                </div>

                                <div className="portfolio-case-item">
                                    <span>
                                        Co zrobiłem
                                    </span>

                                    <p>
                                        {project.work}
                                    </p>
                                </div>
                            </div>

                            <div className="portfolio-tags">
                                {project.tags.map(
                                    (tag) => (
                                        <span key={tag}>
                                            {tag}
                                        </span>
                                    )
                                )}
                            </div>

                            <a
                                href={project.website}
                                target="_blank"
                                rel="noreferrer"
                                className="portfolio-button"
                            >
                                Zobacz stronę
                                <span>↗</span>
                            </a>
                        </div>
                    </article>

                    {/* =========================
                        CONTROLS
                    ========================= */}

                    <div className="portfolio-controls">
                        <div className="portfolio-arrows">
                            <button
                                type="button"
                                className="portfolio-arrow"
                                onClick={
                                    previousProject
                                }
                                aria-label="Poprzednia realizacja"
                            >
                                ←
                            </button>

                            <button
                                type="button"
                                className="portfolio-arrow"
                                onClick={nextProject}
                                aria-label="Następna realizacja"
                            >
                                →
                            </button>
                        </div>

                        <div className="portfolio-pagination">
                            <span className="portfolio-current">
                                {formattedCurrent}
                            </span>

                            <span className="portfolio-divider">
                                /
                            </span>

                            <span>
                                {formattedTotal}
                            </span>
                        </div>

                        <div className="portfolio-dots">
                            {projects.map(
                                (item, index) => (
                                    <button
                                        key={
                                            item.name
                                        }
                                        type="button"
                                        className={`portfolio-dot ${index ===
                                                activeIndex
                                                ? "active"
                                                : ""
                                            }`}
                                        onClick={() =>
                                            goToProject(
                                                index
                                            )
                                        }
                                        aria-label={`Pokaż projekt ${item.name}`}
                                    />
                                )
                            )}
                        </div>
                    </div>

                    {!reducedMotion && (
                        <div className="portfolio-progress">
                            <div
                                key={activeIndex}
                                className={`portfolio-progress-bar ${isPaused
                                        ? "paused"
                                        : ""
                                    }`}
                            />
                        </div>
                    )}

                    <p className="portfolio-swipe-hint">
                        Przesuń, aby zobaczyć kolejną
                        realizację
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;