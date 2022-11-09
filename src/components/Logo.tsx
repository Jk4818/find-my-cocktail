import React from "react";

import LogoImg from "../assets/images/logo.png";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="w-60 h-12 flex items-center gap-2">
      <img
        src={LogoImg}
        alt="new"
        className="h-full aspect-square mix-blend-multiply rounded-xl object-cover animate-ring"
      />
      <h1 className="font-raleway font-black">Find My Cocktail</h1>
    </div>
  );
}
