import React from "react";
import { Link } from "react-router-dom";

import LogoImg from "../assets/images/logo.png";

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="w-60 h-10">
      <Link to="/" className="w-full h-full flex items-center gap-2">
        <img
          src={LogoImg}
          alt="new"
          className="h-full aspect-square mix-blend-multiply rounded-xl object-cover hover:animate-ring"
        />
        <h1 className="hidden lg:block font-raleway font-black text-sm">Find My Cocktail</h1>
      </Link>
    </div>
  );
}
