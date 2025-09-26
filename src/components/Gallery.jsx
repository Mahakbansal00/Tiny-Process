import React, { useState, useEffect, useRef } from "react";

const items = [
  { id: 1, title: "Image A", img: "../a.avif" },
  { id: 2, title: "Image B", img: "../b.avif" },
  { id: 3, title: "Image C", img: "../c.avif" },
  { id: 4, title: "Image D", img: "../d.avif" },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    slideInterval.current = setInterval(() => {
      nextSlide();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(slideInterval.current);
  }, []);

  return (
    <section className="gallery">
      <div className="slider">
        <button className="prev" onClick={prevSlide}>‹</button>
        <div className="slide">
          <img src={items[currentIndex].img} alt={items[currentIndex].title} />
          <h3>{items[currentIndex].title}</h3>
        </div>
        <button className="next" onClick={nextSlide}>›</button>
      </div>
      <div className="pagination">
        {items.map((item, index) => (
          <button
            key={item.id}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
