import React, { useState, useEffect } from "react";
import "./SlidingCard.css";

const SlidingCard = ({ slides }) => {
  const [active, setActive] = useState(3);

  const loadShow = () => {
    const items = document.querySelectorAll(".slider .item");
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = "none";
    items[active].style.opacity = 1;
    for (let i = active + 1; i < items.length; i++) {
      stt++;
      items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (let i = active - 1; i >= 0; i--) {
      stt++;
      items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
      items[i].style.zIndex = -stt;
      items[i].style.filter = "blur(5px)";
      items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
  };

  useEffect(() => {
    loadShow();
  }, [active]);

  const nextSlide = () => {
    if (active + 1 < slides.length) setActive(active + 1);
  };

  const prevSlide = () => {
    if (active - 1 >= 0) setActive(active - 1);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div key={index} className="item">
          <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img src={slide.image} alt={slide.title} />
              <h2>{slide.title}</h2>
          </a>
          <p>{slide.content}</p>
        </div>
      ))}
      <button id="next" onClick={nextSlide}>
        &gt;
      </button>
      <button id="prev" onClick={prevSlide}>
        &lt;
      </button>
    </div>
  );
};

export default SlidingCard;
