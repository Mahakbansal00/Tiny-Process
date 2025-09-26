import React, { useState, useEffect } from "react";

const slides = [
  { id: 1, img: "a.avif" },
  { id: 2, img: "b.avif" },
  { id: 3, img: "c.avif" },
  { id: 4, img: "d.avif" },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide${index === current ? " active" : ""}`}
          style={{ backgroundImage: `url(${slide.img})` }}
        />
      ))}
    </div>
  );
}
