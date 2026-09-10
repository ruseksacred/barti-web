const Contact = () => {
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
                            Napisz lub zadzwoń. Bez technicznego bełkotu i bez presji.
                        </p>

                        <div className="contact-details">
                            <a href="tel:+48123456789">
                                <span>☎</span>
                                +48 123 456 789
                            </a>

                            <a href="mailto:kontakt@bartiweb.pl">
                                <span>✉</span>
                                kontakt@bartiweb.pl
                            </a>
                        </div>
                    </div>

                    <form className="contact-form">
                        <p className="contact-form-title">Albo napisz:</p>

                        <div className="contact-form-row">
                            <div className="contact-field">
                                <label htmlFor="name">Imię</label>
                                <input
                                    id="name"
                                    type="text"
                                    placeholder="Jan"
                                />
                            </div>

                            <div className="contact-field">
                                <label htmlFor="contact">Telefon lub e-mail</label>
                                <input
                                    id="contact"
                                    type="text"
                                    placeholder="+48... / email"
                                />
                            </div>
                        </div>

                        <div className="contact-field">
                            <label htmlFor="business">Czym zajmuje się Twoja firma?</label>
                            <input
                                id="business"
                                type="text"
                                placeholder="np. detailing samochodowy"
                            />
                        </div>

                        <div className="contact-field">
                            <label htmlFor="message">Wiadomość</label>
                            <textarea
                                id="message"
                                rows={5}
                                placeholder="Napisz kilka słów o stronie, której potrzebujesz..."
                            />
                        </div>

                        <button type="submit" className="contact-submit">
                            Wyślij wiadomość
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;