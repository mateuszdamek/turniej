import React from 'react';
import './Info.css';  // Import stylów

const Info = () => {
    return (
        <section id="info" className="info-section">
            <div className="container">
                <h2 className="info-title">Informacje o Turnieju</h2>
                <p className="info-description">
                    Nasz turniej to jedno z najbardziej prestiżowych wydarzeń tenisowych w kraju.
                    Rywalizuj z najlepszymi zawodnikami w atmosferze sportowej rywalizacji i wielkich emocji.
                    Start już w czerwcu 2024 roku!
                </p>
            </div>
        </section>
    );
};

export default Info;
