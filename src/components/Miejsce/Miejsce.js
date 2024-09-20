import React from 'react';
import './Miejsce.css';  // Import stylów

const Miejsce = () => {
    return (
        <section id="miejsce" className="miejsce-section">
            <div className="container">
                <h2 className="miejsce-title">Miejsce Turnieju</h2>
                <p className="miejsce-description">
                    
                </p>
                <div className="map-container">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2576.7653263402462!2d19.07436177706816!3d49.7716711714706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47169e32be6915d3%3A0x6b348d238a38722e!2sKorty%20Tenisowe%20-%20OPEN!5e0!3m2!1spl!2spl!4v1726662139551!5m2!1spl!2spl" 
                        width="600" 
                        height="450" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="map"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Miejsce;
