import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Hero from "./pages/Hero";
import "./App.css";
import Sellers from "./pages/Sellers";
import Top10 from "./pages/Top10";
const App = () => {
  return (
    <>
      <Navbar />
      <Hero/>
      <Sellers/>
      <Top10/>
      <Footer/>
    </>
  );
};

export default App;
