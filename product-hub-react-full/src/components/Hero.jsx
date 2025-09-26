import React from "react";
import Slideshow from "./Slideshow";

export default function Hero({ search, setSearch, category, setCategory }) {
  const categories = ["All", "Free", "Aliens", "Animals", "Monsters"];

  return (
    <section className="hero" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div style={{ flex: 1, paddingRight: "2rem" }}>
        <h1>Meet the new home for your digital goods</h1>
        <p>A modern platform designed to showcase and sell your digital creations.</p>
        <input
          type="text"
          placeholder="Search 3D assets..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={cat === category ? "active" : ""}
              onClick={() => setCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <Slideshow />
      </div>
    </section>
  );
}
