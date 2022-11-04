import React from "react";

function ListCard() {
  return (
    <div className="w-72 h-80">
      <div
        className="w-full p-4 aspect-square flex flex-col gap-4  text-center font-raleway bg-white rounded-2xl drop-shadow-main
      0"
      >
        <div className="mx-auto -mt-14 w-40 aspect-square">
          <img
            src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"
            alt="new"
            className="w-full h-full rounded-xl object-cover"
          />
        </div>
        <h1 className="font-extrabold">Mojito</h1>
        <h2 className="text-xs">Highball Glass</h2>

        <ul className="flex gap-4">
          <li className="w-max h-max text-xs font-extrabold bg-red-400 rounded-lg px-4 p-2">
            Rum
          </li>
          <li className="w-max h-max text-xs font-extrabold bg-red-400 rounded-lg px-4 p-2">
            Rum
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListCard;