import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { motion } from "framer-motion";

import { Cocktail, Ingredients } from "../common/types";

import { TiChevronRight } from "react-icons/ti";
import { parseIngredients, cutIngredients } from "../common/helper";
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";

type Props = {
  loading: boolean;
  cocktailData: Cocktail | undefined;
};

function SearchCard({ loading, cocktailData }: Props) {
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
    <motion.div
      // initial={{ opacity: 0,  y: 50 }}
      // whileInView={{ opacity: 1,  y: 0 }}
      // transition={{ ease: "easeInOut" }}
      // viewport={{ once: true }}
      onClick={handleClick}
      className="w-full md:w-full ml-4 md:ml-0 h-60 flex text-center font-raleway bg-white/70 rounded-2xl drop-shadow-main backdrop-blur-sm group hover:-translate-y-2 transition-all cursor-pointer"
    >
      <div className="mr-auto h-1/2 md:h-full -ml-10 md:-ml-0 my-auto aspect-square drop-shadow-main">
        <LazyLoad height={"100%"}>
          {!loading ? (
            <img
              src={cocktailData?.strDrinkThumb + "/preview"}
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
        </LazyLoad>
      </div>

      <div className="w-full h-full p-4 md:pl-10 pt-10 flex flex-col gap-2 text-left">
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
                  className="w-max h-max text-xs font-extrabold bg-white hover:bg-gray-100 transition-all rounded-md md:rounded-lg md:px-4 p-1 md:p-2"
                >
                  {item.ingredient}
                </li>
              ))
            : Array.from(Array(3), (e, i) => (
                <li key={i} className="w-10 h-4">
                  <Skeleton />
                </li>
              ))}

          <li className="ml-auto  ">
            <TiChevronRight className="text-2xl group-hover:animate-bounce-x transition-all" />
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default SearchCard;
