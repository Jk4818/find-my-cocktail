import React from "react";
import BlobAnimation from "../components/BlobAnimation";
import ListCard from "../components/ListCard";

import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

function Hero() {
  return (
    <div className="relative">
      <BlobAnimation />
      <Title />
      <SearchBar />
      <ListCard />
    </div>
  );
}

export default Hero;
