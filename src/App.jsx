import React from "react";
import Navbar from "./components/Navbar./Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero";
import "./App.css";
import Sellers from "./pages/Sellers";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Sellers/>
      <Footer/>
    </>
  );
};

export default App;
