import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">Product Hub</div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>Explore</li>
          <li>Activate License</li>
          <li>Free Remix</li>
          <li>Sign In</li>
          <li className="btn">Become a Member</li>
        </ul>
      </div>
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
    </nav>
  );
}
