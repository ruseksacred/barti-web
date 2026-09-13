import { useState } from "react";

const faqItems = [
    {
        question: "Ile kosztuje wykonanie strony internetowej?",
        answer:
            "Cena zależy od zakresu projektu. Prosta strona One Page zaczyna się od około 1000 zł, a bardziej rozbudowana strona firmowa od około 1800 zł. Przed rozpoczęciem prac ustalamy dokładny zakres i koszt.",
    },
    {
        question: "Ile trwa wykonanie strony?",
        answer:
            "Prosta strona może być gotowa nawet w ciągu 1–2 tygodni. Przy większych projektach czas zależy od liczby podstron, materiałów i liczby poprawek.",
    },
    {
        question: "Czy muszę mieć własną domenę i hosting?",
        answer:
            "Nie. Mogę pomóc Ci w wyborze i konfiguracji domeny oraz hostingu. Jeśli już je masz, możemy wykorzystać istniejące usługi.",
    },
    {
        question: "Czy strona będzie działać na telefonie i tablecie?",
        answer:
            "Tak. Każda strona jest projektowana responsywnie, dzięki czemu dobrze wygląda i działa na komputerach, tabletach i smartfonach.",
    },
    {
        question: "Czy mogę później zmieniać teksty, zdjęcia lub ofertę?",
        answer:
            "Tak. Mogę wprowadzać zmiany za Ciebie albo przygotować rozwiązanie, które ułatwi późniejszą edycję wybranych treści.",
    },
    {
        question: "Co muszę przygotować przed rozpoczęciem współpracy?",
        answer:
            "Najlepiej podstawowe informacje o firmie, ofertę, dane kontaktowe, logo i zdjęcia, jeśli je posiadasz. Jeśli czegoś brakuje, ustalimy to wspólnie.",
    },
    {
        question: "Co dzieje się po uruchomieniu strony?",
        answer:
            "Po publikacji mogę nadal wspierać Cię przy aktualizacjach, drobnych zmianach i problemach technicznych.",
    },
    {
        question: "Jak wygląda współpraca krok po kroku?",
        answer:
            "Najpierw krótka rozmowa i ustalenie potrzeb. Następnie przygotowuję projekt, wprowadzamy poprawki, a po akceptacji publikujemy gotową stronę.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleItem = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="faq" id="faq">
            <div className="faq-inner">
                <div className="faq-heading">
                    <p className="faq-eyebrow">FAQ</p>
                    <h2>Najczęstsze pytania</h2>
                    <p>
                        Wszystko, co warto wiedzieć przed rozpoczęciem współpracy.
                    </p>
                </div>

                <div className="faq-list">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                className={`faq-item ${isOpen ? "open" : ""}`}
                                key={item.question}
                            >
                                <button
                                    className="faq-question"
                                    onClick={() => toggleItem(index)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq-icon">{isOpen ? "−" : "+"}</span>
                                </button>

                                <div className="faq-answer">
                                    <p>{item.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;