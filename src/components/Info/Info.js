import React from 'react';
import './Info.css';  // Import stylów
import rolandgarros from '../../assets/images/logogarros.png';
import wimbledon from '../../assets/images/wlogo.svg';
import australianopen from '../../assets/images/aologo.png';



// Przykładowe dane spotkań z różnymi statusami
const upcomingMatches = [
    {
        id: 1,
        logo: rolandgarros, 
        date: '2024-09-19',
        time: '17:00',
        name: 'Roland Garros',
        status: 'Zakończone'
    },
    {
        id: 2,
        logo: wimbledon,
        date: '2024-09-24',
        time: '17:00',
        name: 'Wimbledon',
        status: 'Zaplanowane'
    },
    {
        id: 3,
        logo: australianopen,
        date: '2024-10-08',
        time: '17:00',
        name: 'Australian Open',
        status: 'Zaplanowane'
    }
];

const Info = () => {
    return (
        <section id="info" className="info-section">
            <div className="container">
                <h2 className="info-title">Informacje o Turnieju</h2>
                <p className="info-description">
                    Nasz turniej to jedno z najbardziej prestiżowych wydarzeń tenisowych w kraju.
                    Rywalizuj z najlepszymi zawodnikami w atmosferze sportowej rywalizacji i wielkich emocji.
                    Start już w październiku 2024 roku!
                </p>

                <div className="matches">
                    {upcomingMatches.map((match) => (
                        <div 
                            key={match.id} 
                            className={`match-card ${match.status.toLowerCase()}`} // Dodanie klasy na podstawie statusu
                        >
                            <div className="match-logo">
                                <img src={match.logo} alt={match.name} />
                            </div>
                            <div className="match-info">
                                <p className="match-date">{match.date} - {match.time}</p>
                                <h3 className="match-name">{match.name}</h3>
                                <p className="match-status">Status: {match.status}</p> {/* Dodanie statusu */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Info;
