import { useMemo, useState } from "react";
import {
    ArrowLeft,
    ArrowRight,
    Check,
    RefreshCcw,
    Sparkles,
} from "lucide-react";

import "../styles/serviceQuiz.css";

type PaymentModel = "ownership" | "subscription";

type Answers = {
    payment?: PaymentModel;
    presence?: string;
    website?: string;
    google?: string;
    goal?: string;
    advanced?: string;
};

type Option = {
    value: string;
    label: string;
    description?: string;
};

type Question = {
    id: keyof Answers;
    title: string;
    description: string;
    options: Option[];
};

const questions: Question[] = [
    {
        id: "payment",
        title: "Jak wolisz rozliczyć stronę?",
        description:
            "Nie musisz jeszcze znać dokładnej ceny. Chodzi tylko o model współpracy.",
        options: [
            {
                value: "ownership",
                label: "Chcę stronę na własność",
                description:
                    "Płacę za wykonanie projektu, a późniejsze zmiany rozliczamy osobno.",
            },
            {
                value: "subscription",
                label: "Wolę stronę w abonamencie",
                description:
                    "Niższy koszt na początku i stała miesięczna opłata z opieką.",
            },
        ],
    },

    {
        id: "presence",
        title: "Jak dziś klienci znajdują Twoją firmę?",
        description:
            "Wybierz odpowiedź, która najlepiej opisuje obecną sytuację.",
        options: [
            {
                value: "offline",
                label: "Głównie z polecenia lub telefonu",
                description:
                    "Internet praktycznie nie pomaga mi w zdobywaniu klientów.",
            },
            {
                value: "social",
                label: "Facebook lub Instagram",
                description:
                    "Mam social media, ale poza nimi niewiele.",
            },
            {
                value: "google",
                label: "Google i Mapy Google",
                description:
                    "Klienci mogą już znaleźć moją firmę w Google.",
            },
            {
                value: "strong",
                label: "Mam kilka aktywnych kanałów",
                description:
                    "Google, social media, opinie, Booksy lub inne platformy.",
            },
        ],
    },

    {
        id: "website",
        title: "Czy masz już stronę internetową?",
        description:
            "Nie szkodzi, jeśli nie wiesz, czy jest dobrze wykonana.",
        options: [
            {
                value: "none",
                label: "Nie mam strony",
            },
            {
                value: "old",
                label: "Mam, ale wymaga odświeżenia",
            },
            {
                value: "good",
                label: "Mam i jestem z niej zadowolony",
            },
        ],
    },

    {
        id: "google",
        title: "Jak wygląda Twoja obecność w Google?",
        description:
            "Chodzi głównie o Profil Firmy Google i Mapy Google.",
        options: [
            {
                value: "none",
                label: "Nie mam Profilu Firmy Google",
            },
            {
                value: "basic",
                label: "Mam profil, ale prawie go nie rozwijam",
            },
            {
                value: "active",
                label: "Mam profil, zdjęcia i opinie",
            },
            {
                value: "strong",
                label: "Profil działa dobrze i regularnie zdobywa opinie",
            },
        ],
    },

    {
        id: "goal",
        title: "Co chciałbyś poprawić najbardziej?",
        description:
            "Nie musisz znać technicznego rozwiązania. Wybierz po prostu cel.",
        options: [
            {
                value: "visibility",
                label: "Chcę, żeby łatwiej było mnie znaleźć",
            },
            {
                value: "image",
                label: "Chcę wyglądać bardziej profesjonalnie",
            },
            {
                value: "leads",
                label: "Chcę więcej telefonów i zapytań",
            },
            {
                value: "organize",
                label: "Chcę uporządkować to, co już mam",
            },
            {
                value: "single",
                label: "Potrzebuję tylko konkretnej pomocy",
            },
        ],
    },

    {
        id: "advanced",
        title: "Czy potrzebujesz czegoś więcej niż standardowa strona?",
        description:
            "Jeśli nie wiesz, wybierz pierwszą odpowiedź.",
        options: [
            {
                value: "standard",
                label: "Nie, wystarczy mi standardowe rozwiązanie",
            },
            {
                value: "cms",
                label: "Chcę samodzielnie zmieniać treści",
                description:
                    "Np. usługi, aktualności, realizacje lub ceny.",
            },
            {
                value: "booking",
                label: "Potrzebuję systemu rezerwacji",
            },
            {
                value: "shop",
                label: "Interesuje mnie sklep internetowy",
            },
            {
                value: "custom",
                label: "Potrzebuję czegoś nietypowego",
            },
        ],
    },
];

const ServiceQuiz = () => {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<Answers>({});
    const [finished, setFinished] = useState(false);

    const currentQuestion = questions[step];

    const progress = finished
        ? 100
        : ((step + 1) / questions.length) * 100;

    const selectAnswer = (value: string) => {
        const newAnswers = {
            ...answers,
            [currentQuestion.id]: value,
        };

        setAnswers(newAnswers);

        if (step === questions.length - 1) {
            setFinished(true);
        } else {
            setStep((prev) => prev + 1);
        }
    };

    const goBack = () => {
        if (finished) {
            setFinished(false);
            setStep(questions.length - 1);
            return;
        }

        if (step > 0) {
            setStep((prev) => prev - 1);
        }
    };

    const resetQuiz = () => {
        setAnswers({});
        setStep(0);
        setFinished(false);
    };

    const result = useMemo(() => {
        const payment =
            answers.payment === "subscription"
                ? "abonament"
                : "zakup strony na własność";

        /* PREMIUM */

        if (
            answers.advanced === "cms" ||
            answers.advanced === "booking" ||
            answers.advanced === "shop" ||
            answers.advanced === "custom"
        ) {
            const premiumNames: Record<string, string> = {
                cms: "CMS / panel administracyjny",
                booking: "system rezerwacji",
                shop: "sklep internetowy",
                custom: "rozwiązanie indywidualne",
            };

            return {
                label: "Rozwiązanie indywidualne",
                title: "Potrzebujesz czegoś więcej niż zwykłej strony.",
                description:
                    "W tym przypadku najlepiej najpierw ustalić dokładny sposób działania firmy, a dopiero później przygotować rozwiązanie i wycenę.",
                recommendations: [
                    premiumNames[answers.advanced],
                    "indywidualna analiza zakresu",
                    `preferowany model: ${payment}`,
                ],
            };
        }

        /* START OD ZERA */

        if (
            answers.website === "none" &&
            (answers.presence === "offline" ||
                answers.google === "none")
        ) {
            return {
                label: "Start w internecie",
                title: "Najpierw zbudujmy solidne podstawy.",
                description:
                    "Twoja firma ma największy potencjał do poprawy podstawowej obecności w internecie. Warto połączyć stronę, Google i prosty kontakt z klientem w jedną spójną całość.",
                recommendations: [
                    "strona internetowa",
                    "Profil Firmy Google",
                    "podstawowe SEO lokalne",
                    "mapa i szybki kontakt",
                    "integracja z social media",
                    `model współpracy: ${payment}`,
                ],
            };
        }

        /* POJEDYNCZA USŁUGA */

        if (
            answers.goal === "single" ||
            (answers.website === "good" &&
                answers.google === "strong")
        ) {
            const recommendations: string[] = [];

            if (answers.website !== "good") {
                recommendations.push("strona internetowa");
            }

            if (
                answers.google === "none" ||
                answers.google === "basic"
            ) {
                recommendations.push("Profil Firmy Google");
            }

            if (
                answers.goal === "visibility" ||
                answers.goal === "leads"
            ) {
                recommendations.push("SEO lokalne");
            }

            if (recommendations.length === 0) {
                recommendations.push(
                    "indywidualna usługa dopasowana do obecnej sytuacji"
                );
            }

            return {
                label: "Pojedyncza usługa",
                title: "Nie potrzebujesz całego pakietu.",
                description:
                    "Masz już sporą część swojej obecności online. Lepiej uzupełnić konkretny brak niż przebudowywać wszystko od początku.",
                recommendations,
            };
        }

        /* ROZWÓJ */

        return {
            label: "Rozwój obecności",
            title: "Masz już dobry punkt wyjścia.",
            description:
                "Twoja firma jest już obecna w internecie, ale warto połączyć istniejące kanały i stworzyć bardziej profesjonalną, spójną całość.",
            recommendations: [
                answers.website === "none"
                    ? "profesjonalna strona internetowa"
                    : "ulepszenie obecnej strony",
                "uporządkowanie obecności online",
                "Google Search Console",
                "SEO lokalne",
                "lepsza prezentacja oferty",
                `model współpracy: ${payment}`,
            ],
        };
    }, [answers]);

    return (
        <section
            className="service-quiz"
            id="ankieta"
        >
            <div className="service-quiz-inner">

                <div className="quiz-header">
                    <p className="section-eyebrow">
                        DOBIERZ ROZWIĄZANIE
                    </p>

                    <h2>
                        Czego naprawdę potrzebuje
                        <span> Twoja firma?</span>
                    </h2>

                    <p>
                        Odpowiedz na kilka prostych pytań.
                        Bez technicznego języka i bez zobowiązań.
                    </p>
                </div>

                <div className="quiz-box">

                    <div className="quiz-progress-top">
                        <span>
                            {finished
                                ? "Gotowe"
                                : `Pytanie ${step + 1} z ${questions.length}`}
                        </span>

                        <strong>
                            {Math.round(progress)}%
                        </strong>
                    </div>

                    <div className="quiz-progress">
                        <div
                            className="quiz-progress-value"
                            style={{
                                width: `${progress}%`,
                            }}
                        />
                    </div>

                    {!finished ? (
                        <div className="quiz-question">

                            <div className="quiz-question-heading">
                                <h3>
                                    {currentQuestion.title}
                                </h3>

                                <p>
                                    {currentQuestion.description}
                                </p>
                            </div>

                            <div className="quiz-options">
                                {currentQuestion.options.map(
                                    (option) => {
                                        const selected =
                                            answers[
                                                currentQuestion.id
                                            ] === option.value;

                                        return (
                                            <button
                                                type="button"
                                                key={option.value}
                                                className={`quiz-option ${
                                                    selected
                                                        ? "quiz-option-selected"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    selectAnswer(
                                                        option.value
                                                    )
                                                }
                                            >
                                                <span className="quiz-option-check">
                                                    {selected && (
                                                        <Check
                                                            size={16}
                                                            strokeWidth={
                                                                2.5
                                                            }
                                                        />
                                                    )}
                                                </span>

                                                <span className="quiz-option-content">
                                                    <strong>
                                                        {option.label}
                                                    </strong>

                                                    {option.description && (
                                                        <small>
                                                            {
                                                                option.description
                                                            }
                                                        </small>
                                                    )}
                                                </span>

                                                <ArrowRight
                                                    className="quiz-option-arrow"
                                                    size={18}
                                                    strokeWidth={1.8}
                                                />
                                            </button>
                                        );
                                    }
                                )}
                            </div>

                            {step > 0 && (
                                <button
                                    type="button"
                                    className="quiz-back"
                                    onClick={goBack}
                                >
                                    <ArrowLeft size={17} />

                                    Wróć
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="quiz-result">

                            <div className="quiz-result-icon">
                                <Sparkles
                                    size={28}
                                    strokeWidth={1.8}
                                />
                            </div>

                            <p className="quiz-result-label">
                                {result.label}
                            </p>

                            <h3>
                                {result.title}
                            </h3>

                            <p className="quiz-result-description">
                                {result.description}
                            </p>

                            <div className="quiz-result-recommendations">
                                <span>
                                    W Twoim przypadku warto rozważyć:
                                </span>

                                {result.recommendations.map(
                                    (recommendation) => (
                                        <div
                                            className="quiz-result-item"
                                            key={recommendation}
                                        >
                                            <Check
                                                size={16}
                                                strokeWidth={2.4}
                                            />

                                            {recommendation}
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="quiz-result-actions">
                                <a
                                    href="#kontakt"
                                    className="quiz-contact-button"
                                >
                                    Porozmawiajmy o tym

                                    <ArrowRight size={18} />
                                </a>

                                <button
                                    type="button"
                                    className="quiz-reset-button"
                                    onClick={resetQuiz}
                                >
                                    <RefreshCcw size={16} />

                                    Zacznij od nowa
                                </button>
                            </div>

                            <button
                                type="button"
                                className="quiz-back quiz-result-back"
                                onClick={goBack}
                            >
                                <ArrowLeft size={17} />

                                Zmień ostatnią odpowiedź
                            </button>

                        </div>
                    )}

                </div>

                <p className="quiz-note">
                    Wynik ankiety jest wskazówką. Ostateczny zakres
                    ustalimy po krótkiej rozmowie o Twojej firmie.
                </p>

            </div>
        </section>
    );
};

export default ServiceQuiz;