import React from 'react';
import './Miejsce.css';  // Import stylów

const Miejsce = () => {
    return (
        <section id="miejsce" className="miejsce-section">
            <div className="container">
                <h2 className="miejsce-title">Miejsce Turnieju</h2>
                <p className="miejsce-description">
                    Turniej odbędzie się na kortach Central Park w Warszawie. Doskonała lokalizacja
                    w sercu miasta, otoczona zielenią, zapewnia idealne warunki do sportowej rywalizacji.
                </p>
            </div>
        </section>
    );
};

export default Miejsce;
