import React, { useState } from 'react';
import './Kontakt.css';  // Import stylów

const Kontakt = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj można dodać logikę do obsługi wysyłki formularza
        console.log(formData);
        alert('Dziękujemy za kontakt!');
    };

    return (
        <section id="kontakt" className="kontakt-section">
            <div className="container">
                <h2 className="kontakt-title">Skontaktuj się z nami</h2>
                <p className="kontakt-description">
                    Masz pytania? Wypełnij formularz poniżej, a my skontaktujemy się z Tobą wkrótce.
                </p>
                <form className="kontakt-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">Imię:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Wiadomość:</label>
                        <input
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Wyślij wiadomość</button>
                </form>
            </div>
        </section>
    );
};

export default Kontakt;
