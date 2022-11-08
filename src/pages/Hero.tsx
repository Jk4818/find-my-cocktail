import React from "react";
import ListCard from "../components/ListCard";

import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import Logo from "../assets/images/logo.png";

import SearchCard from "../components/SearchCard";
import LoadingIcon from "../components/LoadingIcon";
import Footer from "../components/Footer";

function Hero() {
  return (
    <div className="relative">
      <Title />
      <SearchBar />
      <ListCard />
      <div className="w-60 h-12 flex items-center gap-2">
        <img
          src={Logo}
          alt="new"
          className="h-full aspect-square mix-blend-multiply rounded-xl object-cover animate-ring"
        />
        <h1 className="font-raleway font-black">Find My Cocktail</h1>
      </div>

      <div className="w-[35rem]">
        <SearchCard />
      </div>

      <LoadingIcon />

      <Footer />

    </div>
  );
}

export default Hero;
