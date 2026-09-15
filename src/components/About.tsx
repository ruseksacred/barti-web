import aboutPhoto from "../assets/13229 Rustyn cv.jpg";

const About = () => {
    return (
        <section className="about" id="o-mnie">
            <div className="about-inner">

                <div className="about-visual">
                    <div className="about-glow" />

                    <div className="about-photo-frame">
                        <img
                            src={aboutPhoto}
                            alt="Bartosz - Barti Web"
                        />
                    </div>
                </div>

                <div className="about-content">
                    <p className="about-eyebrow">O MNIE</p>

                    <h2>
                        Cześć, jestem <span>Bartek.</span>
                    </h2>

                    <p>
                        Od ponad 7 lat pracuję w branży IT. W tym czasie uczestniczyłem w wielu
                        ciekawych projektach dla klientów z branży morskiej, samochodowej czy 
                        medycznej. Dziś chcę wykorzystać swoje doświadczenie aby pomóc Tobie
                        lub Twojemu biznesowi skutecznie działać w sieci.
                    </p>

                    <p>
                        Stawiam na prostą współpracę, przejrzysty design i rozwiązania
                        dopasowane do konkretnej firmy. Pomagam przejść od pierwszego
                        pomysłu aż do publikacji gotowej strony.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default About;