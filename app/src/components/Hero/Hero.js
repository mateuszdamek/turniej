import React, { useEffect, useRef, useState } from "react";
import './Hero.css'; // Załóżmy, że plik CSS masz już gotowy

const Hero = () => {
  const [active, setActive] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const itemsRef = useRef([]);
  const dotsRef = useRef([]);
  const lastPosition = 2; // Zakładając, że mamy 3 elementy
  const zIndexRef = useRef(2);
  const autoRunRef = useRef(null);
  const removeEffectRef = useRef(null);

  useEffect(() => {
    autoRunRef.current = setTimeout(() => {
      handleNextClick();
    }, 5000);

    return () => clearTimeout(autoRunRef.current);
  }, [active]);

  const setItemActive = (newValue, callbackFunction) => {
    if (newValue === active || isTransitioning) return;
    let type = newValue > active ? 'next' : 'prev';
    setIsTransitioning(true);
    setActive(newValue);
    callbackFunction(type);
  };

  const handleNextClick = () => {
    let newValue = active + 1 > lastPosition ? 0 : active + 1;
    setItemActive(newValue, showSlider);
  };

  const handlePrevClick = () => {
    let newValue = active - 1 < 0 ? lastPosition : active - 1;
    setItemActive(newValue, showSlider);
  };

  const handleDotClick = (index) => {
    setItemActive(index, showSlider);
  };

  const showSlider = (type) => {
    const carousel = document.querySelector('.carousel');
    carousel.style.pointerEvents = 'none';
    
    // Reset z-index tylko dla starego elementu
    const itemActiveOld = document.querySelector('.carousel .list .item.active');
    if (itemActiveOld) {
      itemActiveOld.classList.remove('active');
    }

    zIndexRef.current++;
    itemsRef.current[active].style.zIndex = zIndexRef.current;
    itemsRef.current[active].classList.add('active');

    // Dodanie efektów do slajdu
    if (type === 'next') {
      carousel.style.setProperty('--transform', '300px');
    } else {
      carousel.style.setProperty('--transform', '-300px');
    }
    carousel.classList.add('effect');

    // Usunięcie starych efektów szybciej
    clearTimeout(removeEffectRef.current);
    removeEffectRef.current = setTimeout(() => {
      carousel.classList.remove('effect');
      carousel.style.pointerEvents = 'auto';
      setIsTransitioning(false);
    }, 1000); // Zmniejszamy czas do 1s, aby usunąć stare efekty szybciej

    // Reset auto-odtwarzania
    clearTimeout(autoRunRef.current);
    autoRunRef.current = setTimeout(() => {
      handleNextClick();
    }, 5000);
  };

  return (
    <div className="carousel">
      <div className="list">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            ref={(el) => itemsRef.current[i] = el}
            className={`item ${i === active ? "active" : ""}`}
            style={{
              '--img-src': `url('images/item${i + 1}.png')`,
              '--bg-color': i === 0 ? "#428372" : i === 1 ? "#EEAA19" : "#e86c3f",
              '--title': i === 0 ? "Lemon" : i === 1 ? "Orange" : "Apple"
            }}
          >
            <div className="content">
              <div className="image"></div>
              <div className="info">
                <div className="title">
                  {i === 0 ? "Lemon-flavored Soda" : i === 1 ? "Orange-flavored Soda" : "Apple-flavored Soda"}
                </div>
                <div className="category">Fruit Soda</div>
                <div className="des">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum id, voluptatem error aspernatur incidunt quas sit.
                </div>
                <a href="#">
                  See More <span>&#8594;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={handlePrevClick}>&lt;</button>
        <button id="next" onClick={handleNextClick}>&gt;</button>
      </div>

      <ul className="dots">
        {[...Array(3)].map((_, i) => (
          <li
            key={i}
            ref={(el) => dotsRef.current[i] = el}
            className={i === active ? "active" : ""}
            onClick={() => handleDotClick(i)}
          ></li>
        ))}
      </ul>
    </div>
  );
};

export default Hero;
