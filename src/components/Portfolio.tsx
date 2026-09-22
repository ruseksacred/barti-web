import {
    useEffect,
    useRef,
    useState,
    type TouchEvent,
} from "react";

import {
    ArrowLeft,
    ArrowRight,
} from "lucide-react";

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

const loopProjects = [
    ...projects,
    ...projects,
];

const SWIPE_DISTANCE = 50;

const AUTO_SCROLL_SECONDS = 18;

const MANUAL_ANIMATION_TIME = 650;

const Portfolio = () => {
    const viewportRef =
        useRef<HTMLDivElement | null>(null);

    const trackRef =
        useRef<HTMLDivElement | null>(null);

    const offsetRef =
        useRef(0);

    const loopWidthRef =
        useRef(0);

    const autoplayFrameRef =
        useRef<number | null>(null);

    const manualFrameRef =
        useRef<number | null>(null);

    const lastTimestampRef =
        useRef<number | null>(null);

    const touchStartX =
        useRef<number | null>(null);

    const [manualMode, setManualMode] =
        useState(false);

    const [reducedMotion, setReducedMotion] =
        useState(false);

    const applyTransform = () => {
        const track =
            trackRef.current;

        if (!track) {
            return;
        }

        track.style.transform =
            `translate3d(${-offsetRef.current}px, 0, 0)`;
    };

    const measureSlider = () => {
        const track =
            trackRef.current;

        if (!track) {
            return;
        }

        const slides =
            track.querySelectorAll<HTMLElement>(
                ".portfolio-slide"
            );

        const duplicateStart =
            slides[projects.length];

        if (!duplicateStart) {
            return;
        }

        const newLoopWidth =
            duplicateStart.offsetLeft;

        const oldLoopWidth =
            loopWidthRef.current;

        if (
            oldLoopWidth > 0 &&
            newLoopWidth > 0
        ) {
            const progress =
                offsetRef.current /
                oldLoopWidth;

            offsetRef.current =
                progress *
                newLoopWidth;
        }

        loopWidthRef.current =
            newLoopWidth;

        while (
            offsetRef.current >=
            newLoopWidth
        ) {
            offsetRef.current -=
                newLoopWidth;
        }

        applyTransform();
    };

    useEffect(() => {
        const mediaQuery =
            window.matchMedia(
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

    useEffect(() => {
        measureSlider();

        const viewport =
            viewportRef.current;

        if (!viewport) {
            return;
        }

        let resizeObserver:
            ResizeObserver | null = null;

        if (
            typeof ResizeObserver !==
            "undefined"
        ) {
            resizeObserver =
                new ResizeObserver(() => {
                    measureSlider();
                });

            resizeObserver.observe(
                viewport
            );
        }

        window.addEventListener(
            "resize",
            measureSlider
        );

        return () => {
            resizeObserver?.disconnect();

            window.removeEventListener(
                "resize",
                measureSlider
            );
        };
    }, []);

    useEffect(() => {
        if (
            manualMode ||
            reducedMotion
        ) {
            return;
        }

        const animate = (
            timestamp: number
        ) => {
            const viewport =
                viewportRef.current;

            const loopWidth =
                loopWidthRef.current;

            if (
                !viewport ||
                loopWidth <= 0
            ) {
                autoplayFrameRef.current =
                    requestAnimationFrame(
                        animate
                    );

                return;
            }

            if (
                lastTimestampRef.current ===
                null
            ) {
                lastTimestampRef.current =
                    timestamp;
            }

            const delta =
                Math.min(
                    timestamp -
                        lastTimestampRef.current,
                    40
                );

            lastTimestampRef.current =
                timestamp;

            const pixelsPerMs =
                viewport.clientWidth /
                (AUTO_SCROLL_SECONDS *
                    1000);

            offsetRef.current +=
                pixelsPerMs * delta;

            if (
                offsetRef.current >=
                loopWidth
            ) {
                offsetRef.current -=
                    loopWidth;
            }

            applyTransform();

            autoplayFrameRef.current =
                requestAnimationFrame(
                    animate
                );
        };

        autoplayFrameRef.current =
            requestAnimationFrame(
                animate
            );

        return () => {
            if (
                autoplayFrameRef.current !==
                null
            ) {
                cancelAnimationFrame(
                    autoplayFrameRef.current
                );
            }

            autoplayFrameRef.current =
                null;

            lastTimestampRef.current =
                null;
        };
    }, [
        manualMode,
        reducedMotion,
    ]);

    const stopAutoplay = () => {
        setManualMode(true);

        lastTimestampRef.current =
            null;
    };

    const animateToOffset = (
        targetOffset: number
    ) => {
        if (
            manualFrameRef.current !==
            null
        ) {
            cancelAnimationFrame(
                manualFrameRef.current
            );
        }

        const startOffset =
            offsetRef.current;

        if (reducedMotion) {
            offsetRef.current =
                targetOffset;

            applyTransform();

            return;
        }

        const startTime =
            performance.now();

        const animate = (
            timestamp: number
        ) => {
            const elapsed =
                timestamp -
                startTime;

            const progress =
                Math.min(
                    elapsed /
                        MANUAL_ANIMATION_TIME,
                    1
                );

            const eased =
                1 -
                Math.pow(
                    1 - progress,
                    3
                );

            offsetRef.current =
                startOffset +
                (targetOffset -
                    startOffset) *
                    eased;

            applyTransform();

            if (progress < 1) {
                manualFrameRef.current =
                    requestAnimationFrame(
                        animate
                    );

                return;
            }

            offsetRef.current =
                targetOffset;

            const loopWidth =
                loopWidthRef.current;

            if (
                loopWidth > 0 &&
                offsetRef.current >=
                    loopWidth
            ) {
                offsetRef.current -=
                    loopWidth;

                applyTransform();
            }

            manualFrameRef.current =
                null;
        };

        manualFrameRef.current =
            requestAnimationFrame(
                animate
            );
    };

    const getNearestProjectIndex =
        () => {
            const track =
                trackRef.current;

            const loopWidth =
                loopWidthRef.current;

            if (
                !track ||
                loopWidth <= 0
            ) {
                return 0;
            }

            const slides =
                Array.from(
                    track.querySelectorAll<HTMLElement>(
                        ".portfolio-slide"
                    )
                ).slice(
                    0,
                    projects.length
                );

            let normalized =
                offsetRef.current %
                loopWidth;

            if (normalized < 0) {
                normalized +=
                    loopWidth;
            }

            let nearestIndex = 0;

            let nearestDistance =
                Number.POSITIVE_INFINITY;

            slides.forEach(
                (slide, index) => {
                    const distance =
                        Math.abs(
                            normalized -
                                slide.offsetLeft
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

        const track =
            trackRef.current;

        const loopWidth =
            loopWidthRef.current;

        if (
            !track ||
            loopWidth <= 0
        ) {
            return;
        }

        const slides =
            track.querySelectorAll<HTMLElement>(
                ".portfolio-slide"
            );

        let normalized =
            offsetRef.current %
            loopWidth;

        if (normalized < 0) {
            normalized +=
                loopWidth;
        }

        offsetRef.current =
            normalized;

        applyTransform();

        const current =
            getNearestProjectIndex();

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

        animateToOffset(
            target.offsetLeft
        );
    };

    const previousProject = () => {
        stopAutoplay();

        const track =
            trackRef.current;

        const loopWidth =
            loopWidthRef.current;

        if (
            !track ||
            loopWidth <= 0
        ) {
            return;
        }

        const slides =
            track.querySelectorAll<HTMLElement>(
                ".portfolio-slide"
            );

        let normalized =
            offsetRef.current %
            loopWidth;

        if (normalized < 0) {
            normalized +=
                loopWidth;
        }

        offsetRef.current =
            normalized;

        applyTransform();

        const current =
            getNearestProjectIndex();

        if (current === 0) {
            offsetRef.current +=
                loopWidth;

            applyTransform();

            const target =
                slides[
                    projects.length -
                        1
                ];

            if (!target) {
                return;
            }

            animateToOffset(
                target.offsetLeft
            );

            return;
        }

        const target =
            slides[current - 1];

        if (!target) {
            return;
        }

        animateToOffset(
            target.offsetLeft
        );
    };

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

        touchStartX.current =
            null;
    };

    useEffect(() => {
        return () => {
            if (
                autoplayFrameRef.current !==
                null
            ) {
                cancelAnimationFrame(
                    autoplayFrameRef.current
                );
            }

            if (
                manualFrameRef.current !==
                null
            ) {
                cancelAnimationFrame(
                    manualFrameRef.current
                );
            }
        };
    }, []);

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
                        konkretnej firmy, jej branży
                        i klientów. Zobacz wybrane
                        realizacje.
                    </p>
                </div>

                <div className="portfolio-slider">

                    <div
                        ref={viewportRef}
                        className="portfolio-slider-window"
                        onTouchStart={
                            handleTouchStart
                        }
                        onTouchEnd={
                            handleTouchEnd
                        }
                    >
                        <div
                            ref={trackRef}
                            className="portfolio-track"
                        >
                            {loopProjects.map(
                                (
                                    project,
                                    index
                                ) => (
                                    <div
                                        className="portfolio-slide"
                                        key={`${project.name}-${index}`}
                                    >
                                        <article className="portfolio-project">

                                            <div className="portfolio-preview">

                                                <div className="portfolio-glow" />

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

                                            <div className="portfolio-content">

                                                <div className="portfolio-type">
                                                    {
                                                        project.type
                                                    }
                                                </div>

                                                <h3>
                                                    {
                                                        project.name
                                                    }
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
                                                        (
                                                            tag
                                                        ) => (
                                                            <span
                                                                key={
                                                                    tag
                                                                }
                                                            >
                                                                {
                                                                    tag
                                                                }
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

                                                    <span>
                                                        ↗
                                                    </span>
                                                </a>
                                            </div>
                                        </article>
                                    </div>
                                )
                            )}
                        </div>
                    </div>

                    <div className="portfolio-arrows">

                        <button
                            type="button"
                            className="portfolio-arrow"
                            onClick={
                                previousProject
                            }
                            aria-label="Poprzednia realizacja"
                        >
                            <ArrowLeft
                                size={19}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </button>

                        <button
                            type="button"
                            className="portfolio-arrow"
                            onClick={
                                nextProject
                            }
                            aria-label="Następna realizacja"
                        >
                            <ArrowRight
                                size={19}
                                strokeWidth={1.8}
                                aria-hidden="true"
                            />
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;