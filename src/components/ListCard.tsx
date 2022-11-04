import React from "react";

function ListCard() {
  return (
    <div className="w-72 h-80">
      <div
        className="w-full p-4 aspect-square flex flex-col gap-4 text-center font-raleway bg-white rounded-2xl drop-shadow-main bg-opacity-70
      0"
      >
        <div className="mx-auto -mt-14 w-40 aspect-square">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
            alt="new"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <h1 className="font-extrabold">Mojito</h1>
        <h2 className="text-xs text-web-gray">Highball Glass</h2>

        <ul className="mt-auto flex gap-4">
          <li className="w-max h-max text-xs font-extrabold bg-white rounded-lg px-4 p-2">
            Rum
          </li>
          <li className="w-max h-max text-xs font-extrabold bg-white rounded-lg px-4 p-2">
            Rum
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListCard;
