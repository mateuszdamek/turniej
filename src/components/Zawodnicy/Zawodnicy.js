import React, { useState, useEffect } from 'react';
import './Zawodnicy.css';
import { zawodnicy } from '../../data/zawodnicyData'; // Import danych



const Zawodnicy = () => {
    const [itemActive, setItemActive] = useState(0);
    const countItem = zawodnicy.length;

    const nextSlide = () => {
        setItemActive((prev) => (prev + 1) % countItem);
    };

    const prevSlide = () => {
        setItemActive((prev) => (prev - 1 + countItem) % countItem);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, [itemActive]);

    return (
        <section id="zawodnicy" className="zawodnicy-section">
            <div className="slider">
                <div className="list">
                    {zawodnicy.map((item, index) => (
                        <div key={index} className={`item ${itemActive === index ? 'active' : ''}`}>
                            <img src={item.img} alt={item.title} />
                            <div className="content">
                                <p>zawodnicy</p>
                                <h2>{item.title}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="arrows">
                    <button id="prev" onClick={prevSlide}>{"<"}</button>
                    <button id="next" onClick={nextSlide}>{">"}</button>
                </div>
                <div className="thumbnail">
                    {zawodnicy.map((item, index) => (
                        <div
                            key={index}
                            className={`item ${itemActive === index ? 'active' : ''}`}
                            onClick={() => setItemActive(index)}
                        >
                            <img src={item.img} alt={item.title} />
                            <div className="content"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Zawodnicy;
