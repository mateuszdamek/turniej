import React, { useState } from 'react';
import './Tabela.css';
import { zawodnicy } from '../../data/zawodnicyData'; // Import danych zawodników

const Tabela = () => {
    const [wyniki, setWyniki] = useState([
        { ...zawodnicy[0], rozegrane: 4, wygrane: 0, przegrane: 4, punkty: 0 },
        { ...zawodnicy[1], rozegrane: 4, wygrane: 4, przegrane: 0, punkty: 4 },
        { ...zawodnicy[2], rozegrane: 4, wygrane: 3, przegrane: 1, punkty: 3 },
        { ...zawodnicy[3], rozegrane: 0, wygrane: 0, przegrane: 0, punkty: 0 },
        { ...zawodnicy[4], rozegrane: 4, wygrane: 2, przegrane: 2, punkty: 2 },
        { ...zawodnicy[5], rozegrane: 4, wygrane: 1, przegrane: 3, punkty: 1 },
    ]);

    // Funkcja do sortowania zawodników
    const sortWyniki = (a, b) => {
        if (b.punkty !== a.punkty) {
            return b.punkty - a.punkty; // Sortowanie według punktów malejąco
        }
        return b.wygrane - a.wygrane; // Sortowanie według wygranych malejąco
    };

    const posortowaneWyniki = [...wyniki].sort(sortWyniki); // Tworzenie posortowanej kopii

    return (
        <section id="tabela-turnieju" className="tabela-turnieju-section">
            <div className="container">
                <h2 className="tabela-title">Tabela Turnieju</h2>
                <table className="tabela">
                    <thead>
                        <tr>
                            <th>Zawodnik</th>
                            <th>Rozegrane mecze</th>
                            <th>Wygrane</th>
                            <th>Przegrane</th>
                            <th>Punkty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posortowaneWyniki.map((zawodnik, index) => (
                            <tr key={index}>
                                <td data-label="Zawodnik">{zawodnik.title}</td>
                                <td data-label="Rozegrane mecze">{zawodnik.rozegrane}</td>
                                <td data-label="Wygrane">{zawodnik.wygrane}</td>
                                <td data-label="Przegrane">{zawodnik.przegrane}</td>
                                <td data-label="Punkty">{zawodnik.punkty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Tabela;
