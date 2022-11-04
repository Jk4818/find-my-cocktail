import React from "react";
import BlobAnimation from "../components/BlobAnimation";
import ListCard from "../components/ListCard";

import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Logo from "../assets/images/logo.png";

function Hero() {
  return (
    <div className="relative">
      <BlobAnimation />
      <Title />
      <SearchBar />
      <ListCard />
      <div className="w-12 aspect-square">
        <img
          src={Logo}
          alt="new"
          className="w-full h-full mix-blend-multiply rounded-xl object-cover animate-ring"
        />
      </div>
    </div>
  );
}

export default Hero;
