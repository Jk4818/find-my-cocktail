import React from "react";

import NoResult from "../assets/images/no-result.gif";

type Props = {};

export default function NoResults({}: Props) {
  return (
    <div className="self-center h-80 w-80 flex flex-col items-center justify-center font-raleway text-center bg-white/80 rounded-2xl drop-shadow-main backdrop-blur-sm filter z-10">
      <div className="h-1/2">
        <img
          src={NoResult}
          alt="new"
          className="w-full h-full object-contain drop-shadow-main"
        />
      </div>
      <h1 className="font-bold">No Results Found</h1>
      <p>We've searched over 1000 cocktails and couldn't find what you're looking for 😭.</p>
    </div>
  );
}
