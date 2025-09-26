import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Product Hub</div>
      <ul className="menu">
        <li>Explore</li>
        <li>Activate License</li>
        <li>Free Remix</li>
        <li>Sign In</li>
        <li className="btn">Become a Member</li>
      </ul>
    </nav>
  );
}
