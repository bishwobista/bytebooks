import React from "react";
import Navbar from "./components/Navbar./Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero";
import "./App.css";
import Sellers from "./pages/Sellers";
import Offers from "./components/Offers/Offers";
import Top10 from "./pages/Top10";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Sellers/>
      <Top10/>
      <Offers />
      <Footer/>
    </>
  );
};

export default App;
