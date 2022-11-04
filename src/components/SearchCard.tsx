import React from "react";

function SearchCard() {
  return (
    <div className="w-full h-56 flex text-center font-raleway bg-white rounded-2xl drop-shadow-main bg-opacity-70 group hover:-translate-y-2 transition-all cursor-pointer">
      <div className="mr-auto  h-full aspect-square drop-shadow-main">
        <img
          src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
          alt="new"
          className="w-full h-full rounded-xl object-cover"
        />
      </div>

      <div className="w-full h-full p-4 flex flex-col gap-4 text-left">
        <h1 className="font-extrabold">Mojito</h1>
        <h2 className="text-xs text-web-gray">Old-fashioned Glass</h2>

        <ul className="list-disc">
          <li> 4.5cL Bourbon</li>
        </ul>

        <ul className="mt-auto flex gap-4 items-center ">
          <li className="w-max h-max text-xs font-extrabold bg-white hover:bg-gray-100 transition-all rounded-lg px-4 p-2">
            Rum
          </li>
          <li className="w-max h-max text-xs font-extrabold bg-white hover:bg-purple-100 transition-all rounded-lg px-4 p-2">
            Rum
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SearchCard;
