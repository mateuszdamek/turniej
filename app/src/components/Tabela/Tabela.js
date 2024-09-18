import React, { useState } from 'react';
import './Tabela.css';
import { zawodnicy } from '../../data/zawodnicyData'; // Import danych zawodników

const Tabela = () => {
    const [wyniki, setWyniki] = useState([
        { ...zawodnicy[0], rozegrane: 0, wygrane: 0, przegrane: 0, wygraneGemy: 0, przegraneGemy: 0, punkty: 0 },
        { ...zawodnicy[1], rozegrane: 0, wygrane: 0, przegrane: 0, wygraneGemy: 0, przegraneGemy: 0, punkty: 0 },
        { ...zawodnicy[2], rozegrane: 0, wygrane: 0, przegrane: 0, wygraneGemy: 0, przegraneGemy: 0, punkty: 0 },
        { ...zawodnicy[3], rozegrane: 0, wygrane: 0, przegrane: 0, wygraneGemy: 0, przegraneGemy: 0, punkty: 0 },
        { ...zawodnicy[4], rozegrane: 0, wygrane: 0, przegrane: 0, wygraneGemy: 0, przegraneGemy: 0, punkty: 0 },
        { ...zawodnicy[5], rozegrane: 0, wygrane: 0, przegrane: 0, wygraneGemy: 0, przegraneGemy: 0, punkty: 0 },
    ]);

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
                            <th>Wygrane gemy</th>
                            <th>Przegrane gemy</th>
                            <th>Punkty</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wyniki.map((zawodnik, index) => (
                            <tr key={index}>
                                <td>{zawodnik.title}</td>
                                <td>{zawodnik.rozegrane}</td>
                                <td>{zawodnik.wygrane}</td>
                                <td>{zawodnik.przegrane}</td>
                                <td>{zawodnik.wygraneGemy}</td>
                                <td>{zawodnik.przegraneGemy}</td>
                                <td>{zawodnik.punkty}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default Tabela;
