import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import NewsLetter from "./components/NewsLetter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <NewsLetter />
      <Cards />
      <Footer />
    </>
  );
}

export default App;
