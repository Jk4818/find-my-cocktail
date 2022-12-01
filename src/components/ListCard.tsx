import React, { useEffect, useState } from "react";
import { TiChevronRight } from "react-icons/ti";

import { useNavigate } from "react-router-dom";

import { Cocktail, Ingredients } from "../common/types";
import { parseIngredients, cutIngredients } from "../common/helper";
import Skeleton from "react-loading-skeleton";
import LazyLoad from "react-lazy-load";

import "../styles/Lazyload.css";

type Props = {
  loading: boolean;
  cocktailData: Cocktail | undefined;
};

function ListCard({ loading, cocktailData }: Props) {
  const navigate = useNavigate();
  const [cocktailIngredients, setCocktailIngredients] = useState<Ingredients[]>(
    []
  );

  const [cocktailFeaturedIngredients, setCocktailFeaturedIngredients] =
    useState<Ingredients[]>([]);

  useEffect(() => {
    if (!loading && cocktailData) {
      setCocktailIngredients(
        cutIngredients(parseIngredients(cocktailData), 4, "")
      );
      setCocktailFeaturedIngredients(
        cutIngredients(parseIngredients(cocktailData), 2, "featured")
      );
    }
  }, []);

  function handleClick(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    e.preventDefault();
    navigate(`/product/${cocktailData?.idDrink}`);
  }

  return (
    <div className="w-72 h-72 lg:w-72 lg:h-72" onClick={handleClick}>
      <div className="w-full h-full p-4 aspect-square flex flex-col gap-4 text-center font-raleway bg-white/80 backdrop-blur-sm rounded-2xl drop-shadow-main  group transition-all cursor-pointer">
        <div className="mx-auto -mt-14 w-40 aspect-square">
          {!loading ? (
            <LazyLoad height={160}>
              <img
                src={cocktailData?.strDrinkThumb + "/preview"}
                alt={cocktailData?.idDrink}
                className="w-full h-full rounded-xl object-cover drop-shadow-main"
              />
            </LazyLoad>
          ) : (
            <Skeleton height="100%" className="z-0" borderRadius="0.75rem" />
          )}
        </div>
        <h1 className="font-extrabold">
          {!loading ? cocktailData?.strDrink : <Skeleton />}
        </h1>
        <h2 className="text-xs text-web-gray">
          {!loading ? cocktailData?.strGlass : <Skeleton width="40%" />}
        </h2>

        <ul className="mt-auto flex gap-4 items-center">
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

          <li className=" ml-auto  ">
            <TiChevronRight className="text-2xl group-hover:animate-bounce-x transition-all" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ListCard;
