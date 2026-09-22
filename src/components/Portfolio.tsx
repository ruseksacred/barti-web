import {
    useEffect,
    useRef,
    useState,
    type TouchEvent,
    type TransitionEvent,
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

        website: "https://wypozyczalnia-rowerow.vercel.app/",
        displayUrl: "rowerylatoszynzdroj.pl",

        desktop: roweryDesktop,
        tablet: roweryTablet,
        mobile: roweryMobile,
    },
];

const AUTOPLAY_TIME = 6500;
const SWIPE_DISTANCE = 50;

/*
 * Dodajemy kopię pierwszego projektu na końcu.
 *
 * Dzięki temu autoplay:
 *
 * 1 -> 2 -> kopia 1
 *
 * cały czas przesuwa się w jednym kierunku.
 * Po dojściu do kopii resetujemy pozycję bez animacji.
 */
const sliderProjects = [
    ...projects,
    projects[0],
];

const Portfolio = () => {
    const [trackIndex, setTrackIndex] = useState(0);

    const [userControlled, setUserControlled] =
        useState(false);

    const [transitionEnabled, setTransitionEnabled] =
        useState(true);

    const [reducedMotion, setReducedMotion] =
        useState(false);

    const touchStartX =
        useRef<number | null>(null);

    /*
     * prefers-reduced-motion
     */
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const updateMotionPreference = () => {
            setReducedMotion(mediaQuery.matches);
        };

        updateMotionPreference();

        mediaQuery.addEventListener(
            "change",
            updateMotionPreference
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                updateMotionPreference
            );
        };
    }, []);

    /*
     * AUTOPLAY
     *
     * Działa tylko do momentu,
     * kiedy użytkownik sam użyje slidera.
     */
    useEffect(() => {
        if (
            userControlled ||
            reducedMotion ||
            !transitionEnabled
        ) {
            return;
        }

        const timer = window.setTimeout(() => {
            setTrackIndex((current) => current + 1);
        }, AUTOPLAY_TIME);

        return () => {
            window.clearTimeout(timer);
        };
    }, [
        trackIndex,
        userControlled,
        reducedMotion,
        transitionEnabled,
    ]);

    /*
     * Gdy autoplay dojedzie do kopii
     * pierwszego projektu:
     *
     * [1] [2] [1-copy]
     *
     * resetujemy pozycję do pierwszego slajdu
     * bez animacji.
     */
    const handleTransitionEnd = (
        event: TransitionEvent<HTMLDivElement>
    ) => {
        if (
            event.propertyName !== "transform" ||
            userControlled
        ) {
            return;
        }

        if (trackIndex === projects.length) {
            setTransitionEnabled(false);
            setTrackIndex(0);

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    setTransitionEnabled(true);
                });
            });
        }
    };

    const nextProject = () => {
        setUserControlled(true);
        setTransitionEnabled(true);

        setTrackIndex((current) => {
            const logicalIndex =
                current % projects.length;

            return (
                (logicalIndex + 1) %
                projects.length
            );
        });
    };

    const previousProject = () => {
        setUserControlled(true);
        setTransitionEnabled(true);

        setTrackIndex((current) => {
            const logicalIndex =
                current % projects.length;

            return (
                (logicalIndex -
                    1 +
                    projects.length) %
                projects.length
            );
        });
    };

    /*
     * Swipe na telefonie / tablecie.
     * Swipe również wyłącza autoplay,
     * bo użytkownik przejął kontrolę.
     */
    const handleTouchStart = (
        event: TouchEvent<HTMLDivElement>
    ) => {
        touchStartX.current =
            event.touches[0].clientX;
    };

    const handleTouchEnd = (
        event: TouchEvent<HTMLDivElement>
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
        } else if (
            distance < -SWIPE_DISTANCE
        ) {
            previousProject();
        }

        touchStartX.current = null;
    };

    const renderProject = (
        project: Project,
        index: number
    ) => {
        return (
            <div
                className="portfolio-slide"
                key={`${project.name}-${index}`}
            >
                <article className="portfolio-project">
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
                                        {project.displayUrl}
                                    </div>
                                </div>

                                <div className="portfolio-browser-screen">
                                    <img
                                        src={project.desktop}
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
                                        src={project.tablet}
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
                                        src={project.mobile}
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
                            {project.tags.map((tag) => (
                                <span key={tag}>
                                    {tag}
                                </span>
                            ))}
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
            </div>
        );
    };

    return (
        <section
            className="portfolio"
            id="realizacje"
        >
            <div className="portfolio-inner">

                {/* =========================
                    HEADER
                ========================= */}

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

                {/* =========================
                    SLIDER
                ========================= */}

                <div
                    className="portfolio-slider"
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="portfolio-slider-window">
                        <div
                            className={`portfolio-track ${
                                transitionEnabled
                                    ? ""
                                    : "no-transition"
                            }`}
                            style={{
                                transform: `translateX(-${
                                    trackIndex * 100
                                }%)`,
                            }}
                            onTransitionEnd={
                                handleTransitionEnd
                            }
                        >
                            {sliderProjects.map(
                                renderProject
                            )}
                        </div>
                    </div>

                    {/* =========================
                        SIMPLE ARROWS
                    ========================= */}

                    <div className="portfolio-arrows">
                        <button
                            type="button"
                            className="portfolio-arrow"
                            onClick={previousProject}
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
                </div>
            </div>
        </section>
    );
};

export default Portfolio;