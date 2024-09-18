import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Info from './components/Info/Info';
import Zawodnicy from './components/Zawodnicy/Zawodnicy';
import Miejsce from './components/Miejsce/Miejsce';
import Kontakt from './components/Kontakt/Kontakt';
import Tabela from './components/Tabela/Tabela';


const App = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Info />
            <Zawodnicy />
            <Tabela />
            <Miejsce />
            <Kontakt />
        </div>
    );
};

export default App;
