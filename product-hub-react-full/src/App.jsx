import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    async function fetchAssets() {
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (category) params.append("category", category);
      const res = await fetch(`http://localhost:4000/api/assets?${params.toString()}`);
      const data = await res.json();
      setAssets(data);
    }
    fetchAssets();
  }, [search, category]);

  const featuredAssets = assets.filter(asset => asset.featured);

  return (
    <div className="app dark-theme">
      <Navbar />
      <Hero search={search} setSearch={setSearch} category={category} setCategory={setCategory} />
      <Gallery assets={assets} />
      <Footer />
    </div>
  );
}

export default App;
