import React, { useRef } from "react";
import './Hero.css';  // Import stylów CSS

const Hero = () => {
  const textRef = useRef(null);

  const handleMouseMove = (e) => {
    const textElement = textRef.current;
    const { left, top } = textElement.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    textElement.style.setProperty("--x", `${x}px`);
    textElement.style.setProperty("--y", `${y}px`);
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <h1
          ref={textRef}
          onMouseMove={handleMouseMove}
          className="hover-effect"
        >
          TURNIEJE / RANKINGI
        </h1>
        <p>Tutaj dowiesz się o rozgrywanych turniejach, zawodnikach oraz rankingach.</p>
        <button className="btn" onClick={() => {
          const tabelaSection = document.getElementById("tabela-turnieju");
          tabelaSection.scrollIntoView({ behavior: "smooth" });
        }}>
          Tabela
        </button>
      </div>
    </section>
  );
};

export default Hero;
