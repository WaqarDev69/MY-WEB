import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import HeadlineCards from "./Components/HeadlineCards";
import Foods from "./Components/Foods";
import Categorie from "./Components/Categorie";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Foods />
      <Categorie />
      <Footer />
    </>
  );
}

export default App;
