import React from "react";

export default function Gallery({ assets }) {
  return (
    <section className="gallery">
      {assets.map((item) => (
        <div key={item.id} className="card">
          <img src={item.img} alt={item.title} />
          <h3>{item.title}</h3>
          {item.featured && <span className="featured">FEATURED</span>}
        </div>
      ))}
    </section>
  );
}
