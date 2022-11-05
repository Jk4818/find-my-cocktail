import React from "react";

function Product() {
  return (
    <div className="relative w-screen h-screen flex justify-center">
      <div className="relative w-[30rem] h-full">
        <div className="mt-20 w-full aspect-square">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
            alt="new"
            className="w-full h-full rounded-3xl object-cover drop-shadow-main"
          />
        </div>

        <div className="absolute left-0 right-0 mx-auto bottom-0 w-11/12 h-[30rem] p-10 flex flex-col text-left font-raleway bg-red-400 rounded-t-3xl drop-shadow-main bg-opacity-70">
          <h1 className="font-bold font-merriweather text-3xl">
            Old Fashioned
          </h1>
          <h2 className="text-sm text-web-gray">Old-fashioned Glass</h2>

          <ul className="my-4 list-disc ml-4  text-web-gray text-xs">
            <li>
              Place sugar cube in old fashioned glass and saturate with bitters,
              add a dash of plain water.
            </li>
          </ul>

          <h3 className="font-raleway font-bold text-xl">Ingredients</h3>
          <ul className="mt-4 list-none text-web-gray text-xs">
            <li> 4.5cL Bourbon</li>
          </ul>

          <ul className="mt-auto flex items-center ">
            <li className="w-max h-36">
              <img
                src="https://www.thecocktaildb.com/images/ingredients/gin-Small.png"
                alt="new"
                className="w-full h-full rounded-3xl object-cover drop-shadow-main"
              />
            </li>
            <li className="w-max h-36">
              <img
                src="https://www.thecocktaildb.com/images/ingredients/Bourbon-small.png"
                alt="new"
                className="w-full h-full rounded-3xl object-cover drop-shadow-main"
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
