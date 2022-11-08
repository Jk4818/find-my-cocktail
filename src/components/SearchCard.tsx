import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import { Cocktail, Ingredients } from "../common/types";

import { TiChevronRight } from "react-icons/ti";
import { parseIngredients } from "../common/helper";

type Props = {
  loading: boolean;
  cocktailData: Cocktail | undefined;
};

function SearchCard({ loading, cocktailData }: Props) {
  const [cocktailIngredients, setCocktailIngredients] = useState<Ingredients[]>(
    []
  );

  const [cocktailFeaturedIngredients, setCocktailFeaturedIngredients] =
    useState<Ingredients[]>([]);

  function cutIngredients(
    ingredients: Ingredients[],
    length: number,
    type: string
  ) {
    if (ingredients.length > length) {
      if (type === "featured") {
        let newIngredients = ingredients.filter(
          (item) => !(item.ingredient.length > 8)
        );
        newIngredients = newIngredients.slice(0, length);
        return newIngredients;
      } else {
        let newIngredients = ingredients.slice(0, length - 1);
        newIngredients.push({ ingredient: "...", measure: "" });
        return newIngredients;
      }
    } else {
      return ingredients;
    }
  }

  useEffect(() => {
    if (!loading) {
      setCocktailIngredients(
        cutIngredients(parseIngredients(cocktailData), 4, "")
      );
      setCocktailFeaturedIngredients(
        cutIngredients(parseIngredients(cocktailData), 2, "featured")
      );
    }
  }, []);

  return (
    <div className="w-full h-60 flex text-center font-raleway bg-white rounded-2xl drop-shadow-main bg-opacity-70 group hover:-translate-y-2 transition-all cursor-pointer">
      <div className="mr-auto  h-full aspect-square drop-shadow-main">
        {!loading ? (
          <img
            src={cocktailData?.strDrinkThumb}
            alt="new"
            className="w-full h-full rounded-xl object-cover"
          />
        ) : (
          <Skeleton
            className="h-full w-full"
            height="100%"
            borderRadius="0.75rem"
          />
        )}
      </div>

      <div className="w-full h-full p-4 pl-10 pt-10 flex flex-col gap-2 text-left">
        <h1 className="font-extrabold">
          {!loading ? cocktailData?.strDrink : <Skeleton />}
        </h1>
        <h2 className="text-xs text-web-gray">
          {!loading ? cocktailData?.strGlass : <Skeleton width="40%" />}
        </h2>

        <ul className="list-disc list-inside text-web-gray text-xs">
          {!loading
            ? cocktailIngredients.map((item, index) => (
                <li key={index} className="">
                  {item.measure} {item.ingredient}
                </li>
              ))
            : Array.from(Array(5), (e, i) => (
                <li key={i}>
                  <Skeleton width={Math.floor(Math.random() * 80) + 10 + "%"} />
                </li>
              ))}
        </ul>

        <ul className="mt-auto flex gap-4 items-center ">
          {!loading
            ? cocktailFeaturedIngredients.map((item, index) => (
                <li
                  key={index}
                  className="w-max h-max text-xs font-extrabold bg-white hover:bg-gray-100 transition-all rounded-lg px-4 p-2"
                >
                  {item.ingredient}
                </li>
              ))
            : Array.from(Array(3), (e, i) => (
                <li key={i} className="w-10 h-4">
                  <Skeleton />
                </li>
              ))}

          <TiChevronRight className="text-2xl ml-auto  group-hover:animate-bounce-x transition-all" />
        </ul>
      </div>
    </div>
  );
}

export default SearchCard;
