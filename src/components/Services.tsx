import {
    ArrowRight,
    BadgeCheck,
    CalendarDays,
    Check,
    Code2,
    CreditCard,
    Globe2,
    Search,
    Settings,
    ShoppingCart,
    Sparkles,
    Store,
    Wrench,
} from "lucide-react";

const Services = () => {
    const solutions = [
        {
            title: "Start w internecie",
            subtitle: "Dla firm zaczynających od zera",
            description:
                "Dla lokalnej firmy, która działa głównie z poleceń, telefonu lub Facebooka i chce w końcu profesjonalnie zaistnieć w internecie.",
            price: "od 1800 zł",
            features: [
                "Nowoczesna strona internetowa",
                "Prezentacja usług i obszaru działania",
                "Profil Firmy Google",
                "Podstawowe SEO lokalne",
                "Mapa i szybki kontakt",
                "Integracja z social media",
                "Pomoc z przygotowaniem treści",
                "Google Search Console",
            ],
        },
        {
            title: "Rozwój obecności",
            subtitle: "Dla firm, które już są online",
            description:
                "Masz już Google, Facebooka, Instagram, opinie albo Booksy? Uporządkujemy to i zbudujemy profesjonalną obecność wokół Twojej firmy.",
            price: "od 1500 zł",
            features: [
                "Profesjonalna strona firmowa",
                "Uporządkowanie obecności online",
                "Oferta, realizacje i opinie",
                "Integracja Google i social media",
                "Formularze i mocne CTA",
                "Google Search Console",
                "Podstawowe SEO lokalne",
                "Analiza tego, co już działa",
            ],
        },
    ];

    const singleServices = [
        {
            icon: Globe2,
            title: "Strona internetowa",
            description:
                "Nowoczesna strona wizytówkowa lub firmowa dopasowana do Twojej działalności.",
            price: "od 1200 zł",
        },
        {
            icon: Store,
            title: "Profil Firmy Google",
            description:
                "Założenie, konfiguracja lub uporządkowanie profilu firmy w Google.",
            price: "od 400 zł",
        },
        {
            icon: Search,
            title: "SEO lokalne",
            description:
                "Podstawowa optymalizacja strony pod wyszukiwania klientów z Twojej okolicy.",
            price: "od 500 zł",
        },
        {
            icon: Sparkles,
            title: "Treści i social media",
            description:
                "Pomoc w uporządkowaniu treści, komunikacji i obecności firmy w social media.",
            price: "wycena indywidualna",
        },
        {
            icon: Settings,
            title: "Integracje",
            description:
                "WhatsApp, Messenger, Booksy, formularze, mapy i inne potrzebne połączenia.",
            price: "od 100 zł",
        },
        {
            icon: Wrench,
            title: "Opieka i zmiany",
            description:
                "Zmiany treści, zdjęć, nowych sekcji i dalszy rozwój po uruchomieniu strony.",
            price: "120 zł / godz.",
        },
    ];

    const premiumServices = [
        {
            icon: Code2,
            title: "CMS i panele",
            description:
                "Panel do samodzielnej edycji treści, ofert, realizacji lub innych danych.",
        },
        {
            icon: CalendarDays,
            title: "Systemy rezerwacji",
            description:
                "Rezerwacje terminów, dostępność, zgłoszenia i rozwiązania dopasowane do firmy.",
        },
        {
            icon: ShoppingCart,
            title: "Sklepy internetowe",
            description:
                "Uruchomienie lub konfiguracja sklepu, płatności, dostaw i potrzebnych integracji.",
        },
    ];

    return (
        <section className="services" id="uslugi">
            <div className="services-inner">

                {/* HEADER */}

                <div className="section-heading">
                    <div>
                        <p className="section-eyebrow">
                            BARTI WEB
                        </p>

                        <h2>
                            Pomagam lokalnym firmom
                            <span> rozwijać się w internecie.</span>
                        </h2>
                    </div>

                    <p className="section-description">
                        Nie musisz wiedzieć, czy potrzebujesz SEO,
                        strony, Google czy czegoś jeszcze.
                        Najpierw sprawdzimy, gdzie jest dziś Twoja
                        firma i dobierzemy rozwiązanie.
                    </p>
                </div>


                {/* MODEL WSPÓŁPRACY */}

                <div className="services-block">
                    <div className="services-block-heading">
                        <p className="section-eyebrow">
                            JAK CHCESZ WSPÓŁPRACOWAĆ?
                        </p>

                        <h3>
                            Wybierz model, który bardziej Ci odpowiada
                        </h3>
                    </div>

                    <div className="payment-models">

                        <article className="payment-card">
                            <div className="payment-icon">
                                <BadgeCheck size={26} />
                            </div>

                            <div className="payment-card-content">
                                <span className="payment-label">
                                    NA WŁASNOŚĆ
                                </span>

                                <h4>
                                    Płacisz raz. Strona jest Twoja.
                                </h4>

                                <p>
                                    Ustalamy zakres i cenę projektu,
                                    realizuję całość, a po zakończeniu
                                    rozliczamy pozostałą kwotę.
                                </p>

                                <ul>
                                    <li>
                                        <Check size={16} />
                                        brak obowiązkowego abonamentu
                                    </li>

                                    <li>
                                        <Check size={16} />
                                        późniejsze zmiany 120 zł/h
                                    </li>

                                    <li>
                                        <Check size={16} />
                                        pełna kontrola nad projektem
                                    </li>
                                </ul>
                            </div>
                        </article>

                        <article className="payment-card payment-card-featured">
                            <div className="payment-badge">
                                Niższy koszt na start
                            </div>

                            <div className="payment-icon">
                                <CreditCard size={26} />
                            </div>

                            <div className="payment-card-content">
                                <span className="payment-label">
                                    W ABONAMENCIE
                                </span>

                                <h4>
                                    Mniejszy koszt wejścia.
                                    Stała miesięczna opłata.
                                </h4>

                                <p>
                                    Nie musisz płacić całej wartości
                                    strony na początku. Otrzymujesz stronę,
                                    hosting i ustalony zakres opieki.
                                </p>

                                <ul>
                                    <li>
                                        <Check size={16} />
                                        strona i hosting w cenie
                                    </li>

                                    <li>
                                        <Check size={16} />
                                        drobne zmiany i wsparcie
                                    </li>

                                    <li>
                                        <Check size={16} />
                                        stała miesięczna opłata
                                    </li>
                                </ul>
                            </div>
                        </article>

                    </div>
                </div>


                {/* GŁÓWNE PAKIETY */}

                <div className="services-block">
                    <div className="services-block-heading">
                        <p className="section-eyebrow">
                            GOTOWE ROZWIĄZANIA
                        </p>

                        <h3>
                            Gdzie jest dziś Twoja firma?
                        </h3>

                        <p>
                            Nie każdy potrzebuje tego samego.
                            Dlatego pakiet dobieramy do sytuacji,
                            w której znajduje się Twoja firma.
                        </p>
                    </div>

                    <div className="solutions-grid">
                        {solutions.map((solution, index) => (
                            <article
                                className={`solution-card ${
                                    index === 0
                                        ? "solution-card-featured"
                                        : ""
                                }`}
                                key={solution.title}
                            >
                                <div className="solution-top">
                                    <span className="solution-number">
                                        0{index + 1}
                                    </span>

                                    <span className="solution-subtitle">
                                        {solution.subtitle}
                                    </span>
                                </div>

                                <h4>{solution.title}</h4>

                                <p className="solution-description">
                                    {solution.description}
                                </p>

                                <div className="solution-price">
                                    {solution.price}
                                </div>

                                <div className="solution-features">
                                    {solution.features.map((feature) => (
                                        <div
                                            className="solution-feature"
                                            key={feature}
                                        >
                                            <Check
                                                size={15}
                                                strokeWidth={2.4}
                                            />

                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <a
                                    href="#kontakt"
                                    className="solution-button"
                                >
                                    Porozmawiajmy

                                    <ArrowRight size={18} />
                                </a>
                            </article>
                        ))}
                    </div>
                </div>


                {/* POJEDYNCZE USŁUGI */}

                <div className="services-block">
                    <div className="services-block-heading">
                        <p className="section-eyebrow">
                            NIE POTRZEBUJESZ PAKIETU?
                        </p>

                        <h3>
                            Wybierz pojedynczą usługę
                        </h3>

                        <p>
                            Masz już większość rzeczy poukładanych?
                            Nie musisz kupować całego pakietu.
                        </p>
                    </div>

                    <div className="single-services-grid">
                        {singleServices.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    className="single-service-card"
                                    key={service.title}
                                >
                                    <div className="single-service-icon">
                                        <Icon
                                            size={22}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <h4>{service.title}</h4>

                                    <p>
                                        {service.description}
                                    </p>

                                    <div className="single-service-bottom">
                                        <strong>
                                            {service.price}
                                        </strong>

                                        <a href="#kontakt">
                                            Zapytaj
                                            <ArrowRight size={16} />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>


                {/* PREMIUM */}

                <div className="services-block premium-block">
                    <div className="services-block-heading premium-heading">
                        <p className="section-eyebrow">
                            ROZWIĄZANIA PREMIUM
                        </p>

                        <h3>
                            Potrzebujesz czegoś więcej niż strony?
                        </h3>

                        <p>
                            Mogę przygotować rozwiązanie dopasowane
                            do sposobu działania Twojej firmy.
                            Takie projekty wyceniam indywidualnie.
                        </p>
                    </div>

                    <div className="premium-grid">
                        {premiumServices.map((service) => {
                            const Icon = service.icon;

                            return (
                                <article
                                    className="premium-card"
                                    key={service.title}
                                >
                                    <div className="premium-icon">
                                        <Icon
                                            size={24}
                                            strokeWidth={1.8}
                                        />
                                    </div>

                                    <h4>{service.title}</h4>

                                    <p>
                                        {service.description}
                                    </p>

                                    <span>
                                        Wycena indywidualna
                                    </span>
                                </article>
                            );
                        })}
                    </div>
                </div>


                {/* QUIZ CTA */}

                <div className="services-quiz">
                    <div className="services-quiz-icon">
                        <Sparkles
                            size={27}
                            strokeWidth={1.8}
                        />
                    </div>

                    <div className="services-quiz-content">
                        <p className="section-eyebrow">
                            NIE WIESZ, CZEGO POTRZEBUJESZ?
                        </p>

                        <h3>
                            Dobierzmy rozwiązanie do Twojej firmy
                        </h3>

                        <p>
                            Odpowiedz na kilka prostych pytań.
                            Sprawdzimy, co już masz, czego brakuje
                            i jakie rozwiązanie może mieć u Ciebie
                            największy sens.
                        </p>
                    </div>

                    <a
                        href="#ankieta"
                        className="services-quiz-button"
                    >
                        Rozpocznij ankietę

                        <ArrowRight size={19} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Services;