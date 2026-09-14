import { useState } from "react";

type FormData = {
    name: string;
    contact: string;
    business: string;
    message: string;
};

const Contact = () => {
    const [formData, setFormData] = useState<FormData>({
        name: "",
        contact: "",
        business: "",
        message: "",
    });

    const [isSending, setIsSending] = useState(false);
    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setIsSending(true);
        setStatus("idle");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Nie udało się wysłać formularza");
            }

            setStatus("success");

            setFormData({
                name: "",
                contact: "",
                business: "",
                message: "",
            });
        } catch (error) {
            console.error(error);

            setStatus("error");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className="contact" id="kontakt">
            <div className="contact-inner">

                <div className="contact-heading">
                    <p className="contact-eyebrow">KONTAKT</p>

                    <h2>Masz pomysł na stronę?</h2>

                    <p>
                        Opowiedz mi o swojej firmie. Powiem Ci, co możemy zrobić
                        i ile to będzie kosztować.
                    </p>
                </div>

                <div className="contact-card">

                    <div className="contact-info">
                        <p className="contact-info-label">POGADAJMY</p>

                        <h3>Bez zobowiązań.</h3>

                        <p className="contact-info-text">
                            Napisz lub zadzwoń. Pogadajmy :)
                        </p>

                        <div className="contact-details">
                            <a href="tel:+48791020803">
                                <span>☎</span>
                                +48 791 020 803
                            </a>

                            <a href="mailto:kontakt@bartiweb.pl">
                                <span>✉</span>
                                kontakt@bartiweb.pl
                            </a>
                        </div>
                    </div>

                    <form
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <p className="contact-form-title">
                            Albo napisz, ja oddzwonię:
                        </p>

                        <div className="contact-form-row">

                            <div className="contact-field">
                                <label htmlFor="name">Imię</label>

                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    placeholder="Jan"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact">
                                    Telefon lub e-mail
                                </label>

                                <input
                                    id="contact"
                                    name="contact"
                                    type="text"
                                    placeholder="+48... / email"
                                    value={formData.contact}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                        </div>

                        <div className="contact-field">
                            <label htmlFor="business">
                                Czym zajmuje się Twoja firma?
                            </label>

                            <input
                                id="business"
                                name="business"
                                type="text"
                                placeholder="np. detailing samochodowy"
                                value={formData.business}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="message">
                                Wiadomość
                            </label>

                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Napisz kilka słów o stronie, której potrzebujesz..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="contact-submit"
                            disabled={isSending}
                        >
                            {isSending
                                ? "Wysyłanie..."
                                : "Wyślij wiadomość"}
                        </button>

                        {status === "success" && (
                            <p className="contact-status contact-status-success">
                                Wiadomość wysłana. Odezwę się najszybciej jak mogę.
                            </p>
                        )}

                        {status === "error" && (
                            <p className="contact-status contact-status-error">
                                Nie udało się wysłać wiadomości. Spróbuj ponownie
                                albo napisz na kontakt@bartiweb.pl.
                            </p>
                        )}

                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;