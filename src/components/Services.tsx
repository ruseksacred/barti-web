const Services = () => {
    const services = [
        {
            title: "Strona One Page",
            description:
                "Oferta, o firmie, galeria, kontakt, mapa i telefon — wszystko na jednej nowoczesnej stronie.",
            price: "od 1000 zł",
        },
        {
            title: "Strona firmowa",
            description:
                "4–6 podstron, galeria, formularz kontaktowy i podstawowa optymalizacja SEO.",
            price: "od 1800 zł",
        },
        {
            title: "Opieka nad stroną",
            description:
                "Drobne zmiany, aktualizacje treści, pomoc techniczna i bieżące wsparcie.",
            price: "od 100 zł / mies.",
        },
    ];

    return (
        <section className="services" id="uslugi">
            <div className="services-inner">
                <div className="section-heading">
                    <div>
                        <p className="section-eyebrow">
                            CO MOGĘ DLA CIEBIE ZROBIĆ
                        </p>

                        <h2>Proste usługi, jasne zasady</h2>
                    </div>

                    <p className="section-description">
                        Wybierz rozwiązanie dopasowane do potrzeb Twojej firmy.
                        Bez zbędnych komplikacji i ukrytych kosztów.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article
                            className={`service-card ${index === 1 ? "service-card-featured" : ""
                                }`}
                            key={service.title}
                        >
                            {index === 1 && (
                                <div className="service-badge">
                                    Najczęściej wybierana
                                </div>
                            )}

                            <div className="service-icon">↗</div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>

                            <div className="service-price">
                                {service.price}
                            </div>

                            <a href="#kontakt" className="service-link">
                                Zapytaj o wycenę
                                <span>→</span>
                            </a>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;