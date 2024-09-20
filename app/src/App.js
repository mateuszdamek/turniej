import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Zawodnicy from './components/Zawodnicy/Zawodnicy';
import Miejsce from './components/Miejsce/Miejsce';
import Kontakt from './components/Kontakt/Kontakt';
import Tabela from './components/Tabela/Tabela';
import './App.css'; // Import pliku CSS dla stylizacji strzałki

const App = () => {
    const [showScrollButton, setShowScrollButton] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) { // Pokaż strzałkę już po lekkim przewinięciu
            setShowScrollButton(true);
        } else {
            setShowScrollButton(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Navbar />
            <Hero />
            <Info />
            <Zawodnicy />
            <Tabela />
            <Miejsce />
            <Kontakt />

            <button
            className={`scroll-to-top ${showScrollButton ? 'show' : ''}`}
            onClick={scrollToTop}
        >
            ↑
        </button>
        </>
    );
};

export default App;
