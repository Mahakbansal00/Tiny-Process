import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
