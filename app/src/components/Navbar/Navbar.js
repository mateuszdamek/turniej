import React from 'react';
import './Navbar.css';  // Import stylów dla nawigacji

const Navbar = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <button onClick={() => scrollToSection('info')}>Info</button>
            <button onClick={() => scrollToSection('zawodnicy')}>Zawodnicy</button>
            <button onClick={() => scrollToSection('tabela-turnieju')}>Tabela</button>
            <button onClick={() => scrollToSection('miejsce')}>Miejsce</button>
            <button onClick={() => scrollToSection('kontakt')}>Kontakt</button>
        </nav>
    );
};

export default Navbar;
