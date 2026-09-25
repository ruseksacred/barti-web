import {
    ArrowRight,
    Check,
    Clock3,
    Globe2,
    RefreshCcw,
    WalletCards,
    Wrench,
} from "lucide-react";

const Services = () => {
    const services = [
        {
            title: "Start",
            description:
                "Dla małej firmy, która potrzebuje nowoczesnej i konkretnej wizytówki w internecie.",
            price: "od 1200 zł",
            features: [
                "Nowoczesna strona One Page",
                "Prezentacja firmy i oferty",
                "Formularz kontaktowy",
                "Mapa Google",
                "Pełna wersja mobilna",
                "Podstawowe SEO",
                "Publikacja strony",
            ],
            buttonText: "Zapytaj o Start",
        },
        {
            title: "Firma",
            description:
                "Dla firmy z większą ofertą, która chce profesjonalnie prezentować się i być lepiej widoczna lokalnie.",
            price: "od 1900 zł",
            features: [
                "Kilka podstron",
                "Rozbudowana prezentacja oferty",
                "Realizacje lub galeria",
                "Sekcja FAQ",
                "Formularz kontaktowy",
                "SEO lokalne",
                "Google Search Console",
                "Sitemap i robots.txt",
                "Konfiguracja Profilu Firmy Google",
            ],
            featured: true,
            badge: "Najczęściej wybierana",
            buttonText: "Zapytaj o Firmę",
        },
        {
            title: "Firma Plus",
            description:
                "Dla bardziej rozbudowanych projektów, które wymagają dodatkowych treści i funkcji.",
            price: "od 2500 zł",
            features: [
                "Wszystko z pakietu Firma",
                "Więcej sekcji i podstron",
                "Dodatkowe formularze",
                "Pomoc z przygotowaniem treści",
                "Blog lub aktualności",
                "Indywidualne funkcje",
                "Rozbudowa dopasowana do firmy",
            ],
            buttonText: "Porozmawiajmy",
        },
    ];

    const extras = [
        {
            name: "Dodatkowa podstrona",
            price: "od 250 zł",
        },
        {
            name: "Dodatkowy formularz",
            price: "od 200 zł",
        },
        {
            name: "Przygotowanie treści",
            price: "od 400 zł",
        },
        {
            name: "WhatsApp / Messenger",
            price: "od 100 zł",
        },
    ];

    return (
        <section className="services" id="uslugi">
            <div className="services-inner">

                {/* =========================
                    HEADER
                ========================= */}

                <div className="section-heading">
                    <div>
                        <p className="section-eyebrow">
                            CO MOGĘ DLA CIEBIE ZROBIĆ
                        </p>

                        <h2>
                            Prosta oferta.
                            <br />
                            <span>Jasne zasady.</span>
                        </h2>
                    </div>

                    <p className="section-description">
                        Wybierz rozwiązanie dopasowane do potrzeb
                        Twojej firmy. Każdy projekt wyceniam
                        indywidualnie, ale od początku wiesz,
                        czego się spodziewać.
                    </p>
                </div>

                {/* =========================
                    PACKAGES
                ========================= */}

                <div className="services-grid">
                    {services.map((service) => (
                        <article
                            className={`service-card ${
                                service.featured
                                    ? "service-card-featured"
                                    : ""
                            }`}
                            key={service.title}
                        >
                            {service.badge && (
                                <div className="service-badge">
                                    {service.badge}
                                </div>
                            )}

                            <div className="service-card-top">
                                <h3>{service.title}</h3>

                                <div className="service-price">
                                    {service.price}
                                </div>

                                <p className="service-description">
                                    {service.description}
                                </p>
                            </div>

                            <div className="service-features">
                                {service.features.map((feature) => (
                                    <div
                                        className="service-feature"
                                        key={feature}
                                    >
                                        <span className="service-check">
                                            <Check
                                                size={15}
                                                strokeWidth={2.4}
                                            />
                                        </span>

                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#kontakt"
                                className={`service-link ${
                                    service.featured
                                        ? "service-link-featured"
                                        : ""
                                }`}
                            >
                                {service.buttonText}

                                <ArrowRight
                                    size={18}
                                    strokeWidth={1.8}
                                />
                            </a>
                        </article>
                    ))}
                </div>

                {/* =========================
                    MORE
                ========================= */}

                <div className="services-more">
                    <div className="services-more-heading">
                        <p className="section-eyebrow">
                            WIĘCEJ MOŻLIWOŚCI
                        </p>

                        <h3>
                            Potrzebujesz czegoś więcej?
                        </h3>
                    </div>

                    <div className="services-more-grid">

                        {/* CARE */}

                        <article className="service-care-card">
                            <div className="service-care-icon">
                                <Wrench
                                    size={24}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <div>
                                <p className="service-small-label">
                                    OPIEKA I ROZWÓJ
                                </p>

                                <h4>
                                    120 zł
                                    <span>/ godz.</span>
                                </h4>

                                <p>
                                    Drobne zmiany, aktualizacje treści
                                    i zdjęć, nowe sekcje, poprawki
                                    techniczne i dalszy rozwój strony.
                                </p>

                                <div className="service-care-note">
                                    Bez abonamentu. Płacisz wtedy,
                                    kiedy faktycznie potrzebujesz pomocy.
                                </div>
                            </div>
                        </article>

                        {/* EXTRAS */}

                        <article className="service-extras-card">
                            <p className="service-small-label">
                                DODATKOWE ELEMENTY
                            </p>

                            <div className="service-extras-list">
                                {extras.map((extra) => (
                                    <div
                                        className="service-extra"
                                        key={extra.name}
                                    >
                                        <span>
                                            {extra.name}
                                        </span>

                                        <strong>
                                            {extra.price}
                                        </strong>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>

                {/* =========================
                    RULES
                ========================= */}

                <div className="services-rules">

                    <div className="service-rule">
                        <div className="service-rule-icon">
                            <RefreshCcw
                                size={21}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <strong>
                                3–4 rundy poprawek
                            </strong>

                            <p>
                                Dopracowujemy projekt
                                w rozsądnym zakresie.
                            </p>
                        </div>
                    </div>

                    <div className="service-rule">
                        <div className="service-rule-icon">
                            <WalletCards
                                size={21}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <strong>
                                30–40% na start
                            </strong>

                            <p>
                                Reszta po zakończeniu
                                i akceptacji projektu.
                            </p>
                        </div>
                    </div>

                    <div className="service-rule">
                        <div className="service-rule-icon">
                            <Globe2
                                size={21}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <strong>
                                Domena i hosting
                            </strong>

                            <p>
                                Są po stronie klienta,
                                ale pomagam je skonfigurować.
                            </p>
                        </div>
                    </div>

                    <div className="service-rule">
                        <div className="service-rule-icon">
                            <Clock3
                                size={21}
                                strokeWidth={1.8}
                            />
                        </div>

                        <div>
                            <strong>
                                Jasny termin
                            </strong>

                            <p>
                                Zwykle od 7 do 20 dni,
                                zależnie od projektu.
                            </p>
                        </div>
                    </div>

                </div>

                {/* =========================
                    CTA
                ========================= */}

                <div className="services-cta">
                    <div>
                        <p className="section-eyebrow">
                            NIE WIESZ, CO WYBRAĆ?
                        </p>

                        <h3>
                            Porozmawiajmy o Twojej firmie.
                        </h3>

                        <p>
                            Po krótkiej rozmowie podpowiem,
                            jaki zakres naprawdę będzie Ci
                            potrzebny — bez dokładania
                            niepotrzebnych funkcji.
                        </p>
                    </div>

                    <a
                        href="#kontakt"
                        className="services-cta-button"
                    >
                        Darmowa wycena

                        <ArrowRight
                            size={19}
                            strokeWidth={1.8}
                        />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;