import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { CustomArrowProps } from "react-slick";
import Skeleton from "react-loading-skeleton";
import { Cocktail, Ingredients} from "../common/types";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { parseIngredients } from "../common/helper";
import LazyLoad from "react-lazy-load";


type Props = {
  loading: boolean;
  cocktailData: Cocktail | undefined;
};

export default function MainCard({
  loading,
  cocktailData,
}: Props) {
  const SlickButtonFixRight = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <span {...props} className="absolute h-max -right-6 top-14 bottom-0 text-2xl text-black">
      <GoChevronRight />
    </span>
  );
  const SlickButtonFixLeft = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => (
    <span {...props} className="absolute h-max -left-6 top-14 bottom-0 text-2xl text-black">
      <GoChevronLeft />
    </span>
  );

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SlickButtonFixRight />,
    prevArrow: <SlickButtonFixLeft />,
  };

  
  const [cocktailIngredients, setCocktailIngredients] = useState<Ingredients[]>(
    []
  );


  useEffect(() => {
    setCocktailIngredients(parseIngredients(cocktailData));
  }, [cocktailData])
  
  
  return (
    <div className="relative w-[30rem] h-full">
      <div className="mt-20 w-full aspect-square">
        <LazyLoad height={480} className="">
          {!loading ? (
            <img
              src={cocktailData?.strDrinkThumb}
              alt="new"
              className="w-full h-full rounded-3xl object-contain drop-shadow-main"
            />
          ) : (
            <Skeleton height="100%" className="z-0" borderRadius="1.5rem" />
          )}
        </LazyLoad>
      </div>

      <div className="absolute left-0 right-0 mx-auto bottom-0 w-11/12 h-[32rem] p-10 flex flex-col text-left font-raleway bg-white/80 rounded-2xl drop-shadow-main backdrop-blur-sm filter z-10">
        <h1 className="font-bold font-merriweather text-3xl">
          {!loading ? cocktailData?.strDrink : <Skeleton />}
        </h1>
        <h2 className="text-sm text-web-gray">
          {!loading ? (
            cocktailData?.strGlass
          ) : (
            <Skeleton width="40%" />
          )}
        </h2>

        <ul className="my-4 list-disc ml-4  text-web-gray text-xs">
          {!loading
            ? cocktailData?.strInstructions
                .split(".")
                .slice(0, -1)
                .map((item, index) => <li key={index}>{item}.</li>)
            : Array.from(Array(5), (e, i) => (
                <li key={i}>
                  <Skeleton width={Math.floor(Math.random() * 80) + 10 + "%"} />
                </li>
              ))}
        </ul>

        <h3 className="font-raleway font-bold text-xl">Ingredients</h3>

        <ul className=" flex items-center w-full h-1/2 grow  text-xs py-4">
          <Slider {...settings} className="w-full h-full cursor-grab flex">
            {!loading
              ? cocktailIngredients.map((item, index) => (
                  <li key={index} className="h-full flex flex-col">
                    <div className="h-2/3 bg-gray-100 hover:bg-gray-200 transition-all rounded-2xl flex items-center justify-center py-2">
                      <LazyLoad height="100%">
                        <img
                          src={`https://www.thecocktaildb.com/images/ingredients/${item.ingredient}-Small.png`}
                          alt="new"
                          className="h-full p-4 object-cover drop-shadow-main"
                        />
                      </LazyLoad>
                    </div>
                    <h3 className="w-full mt-2 h-max text-center font-semibold">
                      {item.measure} {item.ingredient}
                    </h3>
                  </li>
                ))
              : Array.from(Array(4), (e, i) => <Skeleton key={i} height="100%" />)}
          </Slider>
        </ul>
      </div>
    </div>
  );
}
