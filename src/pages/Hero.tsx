import React from "react";

import Title from "../components/Title";

import Footer from "../components/Footer";
import Popular from "../components/Popular";

function Hero() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <Title />
      <Popular />


      <Footer />

    </div>
  );
}

export default Hero;
