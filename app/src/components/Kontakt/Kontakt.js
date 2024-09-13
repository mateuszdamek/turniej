import React from 'react';
import './Kontakt.css';  // Import stylów

const Kontakt = () => {
    return (
        <section id="kontakt" className="kontakt-section">
            <div className="container">
                <h2 className="kontakt-title">Kontakt</h2>
                <p className="kontakt-description">
                    Masz pytania? Skontaktuj się z nami przez e-mail: <a href="mailto:turniej@tenis2024.com">turniej@tenis2024.com</a>
                </p>
            </div>
        </section>
    );
};

export default Kontakt;
