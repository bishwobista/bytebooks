import React from "react";
import Navbar from "./components/Navbar./Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero";
import "./App.css";
import Sellers from "./pages/Sellers";
import Offers from "./components/Offers/Offers";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Sellers/>
      <Offers />
      <Footer/>
    </>
  );
};

export default App;
