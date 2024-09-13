import React, { useState, useEffect } from 'react';
import './Zawodnicy.css';
import img1 from '../../assets/images/mati.jpg'; // Zakładamy, że masz pliki z obrazami
import img2 from '../../assets/images/seba.jpg';
import img3 from '../../assets/images/tomek.jpg';
import img4 from '../../assets/images/bartek.jpg';
import img5 from '../../assets/images/arek.jpg';
import img6 from '../../assets/images/kamil.jpg';


const Zawodnicy = () => {
    const [itemActive, setItemActive] = useState(0);

    const items = [
        { img: img1, title: 'Mateusz', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: img2, title: 'Sebastian', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: img3, title: 'Tomasz', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: img4, title: 'Bartłomiej', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: img5, title: 'Arkadiusz', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { img: img6, title: 'Kamil', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    ];

    const countItem = items.length;

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
                    {items.map((item, index) => (
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
                    {items.map((item, index) => (
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
