const steps = [
    {
        number: "01",
        title: "Rozmowa",
        description:
            "Poznaję Twoją firmę, potrzeby i cel strony. Ustalamy, czego naprawdę potrzebujesz.",
    },
    {
        number: "02",
        title: "Projekt",
        description:
            "Przygotowuję wygląd i układ strony dopasowany do Twojej branży i klientów.",
    },
    {
        number: "03",
        title: "Poprawki",
        description:
            "Omawiamy projekt i wprowadzamy potrzebne zmiany, aż wszystko będzie pasować.",
    },
    {
        number: "04",
        title: "Publikacja",
        description:
            "Podpinam domenę, uruchamiam stronę i pomagam również po jej wdrożeniu.",
    },
];

const Process = () => {
    return (
        <section className="process" id="jak-to-dziala">
            <div className="process-inner">
                <div className="process-heading">
                    <p className="process-eyebrow">ToProste!</p>

                    <h2>Od pomysłu do gotowej strony w kilku krokach.</h2>

                    <p>
                        Bez skomplikowanego procesu i technicznego języka.
                        Ty opowiadasz, czego potrzebujesz — ja zajmuję się resztą.
                    </p>
                </div>

                <div className="process-steps">
                    {steps.map((step, index) => (
                        <div className="process-step" key={step.number}>
                            <div className="process-number">{step.number}</div>

                            <h3>{step.title}</h3>

                            <p>{step.description}</p>

                            {index < steps.length - 1 && (
                                <div className="process-arrow">→</div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="process-cta">
                    <a href="#kontakt" className="process-button">
                        Porozmawiajmy o Twojej stronie
                        <span>→</span>
                    </a>

                    <p>
                        To nic nie kosztuje i do niczego nie zobowiązuje.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Process;