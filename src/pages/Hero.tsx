import React from "react";

import Title from "../components/Title";

import Popular from "../components/Popular";
import SearchBar from "../components/SearchBar";

function Hero() {
  return (
    <div className="relative w-full h-full md:px-20 flex justify-center 2xl:justify-between items-center overflow-x-hidden">
      <div className="hidden 2xl:flex w-1/4 flex-col gap-4 3xl:gap-14">
        <Title />
        <SearchBar />
      </div>
      <Popular  />


    </div>
  );
}

export default Hero;
