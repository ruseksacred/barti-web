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

        website:
            "https://wypozyczalnia-rowerow.vercel.app/",

        displayUrl:
            "rowerylatoszynzdroj.pl",

        desktop: roweryDesktop,
        tablet: roweryTablet,
        mobile: roweryMobile,
    },
];

/*
 * Duplikujemy projekty:
 *
 * Warsztat | Rowery | Warsztat | Rowery
 *
 * Dzięki temu możemy przewijać tor bez końca.
 */
const loopProjects = [
    ...projects,
    ...projects,
];

const SWIPE_DISTANCE = 50;

/*
 * Ile sekund zajmuje przesunięcie
 * mniej więcej o szerokość jednego ekranu.
 *
 * Większa liczba = wolniejsze płynięcie.
 */
const AUTO_SCROLL_SECONDS = 18;

const Portfolio = () => {
    const sliderRef =
        useRef<HTMLDivElement | null>(null);

    const animationFrameRef =
        useRef<number | null>(null);

    const lastFrameRef =
        useRef<number | null>(null);

    const touchStartX =
        useRef<number | null>(null);

    const manualResetTimer =
        useRef<number | null>(null);

    const [userControlled, setUserControlled] =
        useState(false);

    const [reducedMotion, setReducedMotion] =
        useState(false);

    /*
     * prefers-reduced-motion
     */
    useEffect(() => {
        const mediaQuery = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        );

        const updatePreference = () => {
            setReducedMotion(
                mediaQuery.matches
            );
        };

        updatePreference();

        mediaQuery.addEventListener(
            "change",
            updatePreference
        );

        return () => {
            mediaQuery.removeEventListener(
                "change",
                updatePreference
            );
        };
    }, []);

    /*
     * =========================
     * CIĄGŁY AUTOPLAY
     * =========================
     *
     * Nie przeskakujemy już o 100%.
     * Zamiast tego co klatkę przesuwamy
     * scrollLeft o bardzo małą wartość.
     */
    useEffect(() => {
        if (
            userControlled ||
            reducedMotion
        ) {
            return;
        }

        const animate = (
            timestamp: number
        ) => {
            const slider =
                sliderRef.current;

            if (!slider) {
                animationFrameRef.current =
                    requestAnimationFrame(
                        animate
                    );

                return;
            }

            if (
                lastFrameRef.current === null
            ) {
                lastFrameRef.current =
                    timestamp;
            }

            /*
             * Ograniczamy deltaTime,
             * żeby po zmianie karty
             * przeglądarki slider nie skoczył.
             */
            const deltaTime = Math.min(
                timestamp -
                    lastFrameRef.current,
                40
            );

            lastFrameRef.current =
                timestamp;

            /*
             * Jeden viewport w około
             * AUTO_SCROLL_SECONDS sekund.
             */
            const speed =
                slider.clientWidth /
                (AUTO_SCROLL_SECONDS *
                    1000);

            slider.scrollLeft +=
                speed * deltaTime;

            const slides =
                slider.querySelectorAll<HTMLElement>(
                    ".portfolio-slide"
                );

            /*
             * Pierwszy element drugiego
             * zestawu projektów.
             */
            const duplicateStart =
                slides[projects.length]
                    ?.offsetLeft ?? 0;

            /*
             * Gdy dojedziemy do kopii,
             * cofamy scroll o dokładnie
             * szerokość pierwszego zestawu.
             *
             * Wizualnie użytkownik tego
             * nie zauważy, bo widok jest
             * identyczny.
             */
            if (
                duplicateStart > 0 &&
                slider.scrollLeft >=
                    duplicateStart
            ) {
                slider.scrollLeft -=
                    duplicateStart;
            }

            animationFrameRef.current =
                requestAnimationFrame(
                    animate
                );
        };

        animationFrameRef.current =
            requestAnimationFrame(animate);

        return () => {
            if (
                animationFrameRef.current !==
                null
            ) {
                cancelAnimationFrame(
                    animationFrameRef.current
                );
            }

            animationFrameRef.current =
                null;

            lastFrameRef.current =
                null;
        };
    }, [
        userControlled,
        reducedMotion,
    ]);

    /*
     * Użytkownik przejmuje kontrolę.
     */
    const stopAutoplay = () => {
        setUserControlled(true);

        lastFrameRef.current = null;
    };

    /*
     * Normalizujemy scroll tak,
     * aby znajdował się w pierwszym
     * zestawie projektów.
     */
    const normalizePosition = () => {
        const slider =
            sliderRef.current;

        if (!slider) {
            return 0;
        }

        const slides =
            slider.querySelectorAll<HTMLElement>(
                ".portfolio-slide"
            );

        const duplicateStart =
            slides[projects.length]
                ?.offsetLeft ?? 0;

        if (
            duplicateStart > 0 &&
            slider.scrollLeft >=
                duplicateStart
        ) {
            slider.scrollLeft -=
                duplicateStart;
        }

        return duplicateStart;
    };

    /*
     * Znajdujemy projekt znajdujący się
     * najbliżej lewej krawędzi viewportu.
     */
    const getNearestProjectIndex =
        () => {
            const slider =
                sliderRef.current;

            if (!slider) {
                return 0;
            }

            const slides =
                Array.from(
                    slider.querySelectorAll<HTMLElement>(
                        ".portfolio-slide"
                    )
                ).slice(
                    0,
                    projects.length
                );

            let nearestIndex = 0;
            let nearestDistance =
                Number.POSITIVE_INFINITY;

            slides.forEach(
                (slide, index) => {
                    const distance =
                        Math.abs(
                            slide.offsetLeft -
                                slider.scrollLeft
                        );

                    if (
                        distance <
                        nearestDistance
                    ) {
                        nearestDistance =
                            distance;

                        nearestIndex =
                            index;
                    }
                }
            );

            return nearestIndex;
        };

    const nextProject = () => {
        stopAutoplay();

        const slider =
            sliderRef.current;

        if (!slider) {
            return;
        }

        normalizePosition();

        const slides =
            slider.querySelectorAll<HTMLElement>(
                ".portfolio-slide"
            );

        const current =
            getNearestProjectIndex();

        /*
         * Jeśli jesteśmy na ostatnim,
         * jedziemy do kopii pierwszego,
         * czyli cały czas w prawo.
         */
        const targetIndex =
            current ===
            projects.length - 1
                ? projects.length
                : current + 1;

        const target =
            slides[targetIndex];

        if (!target) {
            return;
        }

        slider.scrollTo({
            left: target.offsetLeft,
            behavior: "smooth",
        });

        /*
         * Jeśli pojechaliśmy do kopii
         * pierwszego projektu,
         * po zakończeniu animacji
         * bezszelestnie wracamy
         * do oryginalnego początku.
         */
        if (
            targetIndex ===
            projects.length
        ) {
            if (
                manualResetTimer.current !==
                null
            ) {
                window.clearTimeout(
                    manualResetTimer.current
                );
            }

            manualResetTimer.current =
                window.setTimeout(() => {
                    const first =
                        slides[0];

                    if (
                        slider &&
                        first
                    ) {
                        slider.scrollLeft =
                            first.offsetLeft;
                    }
                }, 650);
        }
    };

    const previousProject = () => {
        stopAutoplay();

        const slider =
            sliderRef.current;

        if (!slider) {
            return;
        }

        const slides =
            slider.querySelectorAll<HTMLElement>(
                ".portfolio-slide"
            );

        const duplicateStart =
            normalizePosition();

        const current =
            getNearestProjectIndex();

        /*
         * Jeśli jesteśmy na pierwszym
         * projekcie i klikamy wstecz:
         *
         * przenosimy się niewidocznie
         * do jego kopii w drugim zestawie,
         * a następnie płynnie jedziemy
         * w lewo.
         */
        if (current === 0) {
            slider.scrollLeft +=
                duplicateStart;

            const previous =
                slides[
                    projects.length * 2 -
                        1
                ];

            if (!previous) {
                return;
            }

            requestAnimationFrame(() => {
                slider.scrollTo({
                    left:
                        previous.offsetLeft,
                    behavior: "smooth",
                });
            });

            return;
        }

        const previous =
            slides[current - 1];

        if (!previous) {
            return;
        }

        slider.scrollTo({
            left: previous.offsetLeft,
            behavior: "smooth",
        });
    };

    /*
     * =========================
     * SWIPE
     * =========================
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
        if (
            touchStartX.current === null
        ) {
            return;
        }

        const touchEndX =
            event.changedTouches[0]
                .clientX;

        const distance =
            touchStartX.current -
            touchEndX;

        if (
            distance >
            SWIPE_DISTANCE
        ) {
            nextProject();
        } else if (
            distance <
            -SWIPE_DISTANCE
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

                    {/* PREVIEW */}

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

                    {/* CONTENT */}

                    <div className="portfolio-content">

                        <div className="portfolio-type">
                            {project.type}
                        </div>

                        <h3>
                            {project.name}
                        </h3>

                        <p className="portfolio-description">
                            {
                                project.description
                            }
                        </p>

                        <div className="portfolio-case">

                            <div className="portfolio-case-item">
                                <span>
                                    Cel projektu
                                </span>

                                <p>
                                    {
                                        project.goal
                                    }
                                </p>
                            </div>

                            <div className="portfolio-case-item">
                                <span>
                                    Co zrobiłem
                                </span>

                                <p>
                                    {
                                        project.work
                                    }
                                </p>
                            </div>

                        </div>

                        <div className="portfolio-tags">
                            {project.tags.map(
                                (tag) => (
                                    <span
                                        key={tag}
                                    >
                                        {tag}
                                    </span>
                                )
                            )}
                        </div>

                        <a
                            href={
                                project.website
                            }
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

                {/* HEADER */}

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
                        konkretnej firmy, jej branży
                        i klientów. Zobacz wybrane
                        realizacje.
                    </p>
                </div>

                {/* SLIDER */}

                <div className="portfolio-slider">

                    <div
                        ref={sliderRef}
                        className="portfolio-slider-window"
                        onTouchStart={
                            handleTouchStart
                        }
                        onTouchEnd={
                            handleTouchEnd
                        }
                    >
                        <div
                            className="portfolio-track"
                            style={{
                                width: `${
                                    loopProjects.length *
                                    100
                                }%`,
                            }}
                        >
                            {loopProjects.map(
                                (
                                    project,
                                    index
                                ) => (
                                    <div
                                        key={`${project.name}-${index}`}
                                        style={{
                                            flex: `0 0 ${
                                                100 /
                                                loopProjects.length
                                            }%`,
                                        }}
                                        className="portfolio-slide-wrapper"
                                    >
                                        {renderProject(
                                            project,
                                            index
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    {/* TYLKO STRZAŁKI */}

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
                            onClick={
                                nextProject
                            }
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