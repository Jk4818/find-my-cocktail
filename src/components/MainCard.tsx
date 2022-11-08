import React from "react";

import Slider from "react-slick";
import Skeleton from "react-loading-skeleton";

import { GoChevronRight, GoChevronLeft } from "react-icons/go";

interface Drinks {
  drinks: Array<Cocktail>;
}
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  strTags: string;
  strImageSource: string;
  strInstructions: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;

  strCreativeCommonsConfirmed: string;
  dateModified: string;
}
interface Ingredients {
  ingredient: string;
  measure: string;
}


type Props = {
  loading: boolean;
  cocktailData: Drinks | undefined;
  cocktailIngredients: Ingredients[];

};

export default function MainCard({loading, cocktailData, cocktailIngredients}: Props) {
  var settings = {

    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <GoChevronRight />,
    prevArrow: <GoChevronLeft />,
  };

  return (
    <div className="relative w-[30rem] h-full">
      <div className="mt-20 w-full aspect-square">
        {!loading ? (
          <img
            src={cocktailData?.drinks?.[0].strDrinkThumb}
            alt="new"
            className="w-full h-full rounded-3xl object-contain drop-shadow-main"
          />
        ) : (
          <Skeleton height="100%" className="z-0" borderRadius="1.5rem" />
        )}
      </div>

      <div className="absolute left-0 right-0 mx-auto bottom-0 w-11/12 h-[32rem] p-10 flex flex-col text-left font-raleway bg-white/80 rounded-2xl drop-shadow-main backdrop-blur-sm filter z-10">
        <h1 className="font-bold font-merriweather text-3xl">
          {!loading ? cocktailData?.drinks?.[0].strDrink : <Skeleton />}
        </h1>
        <h2 className="text-sm text-web-gray">
          {!loading ? (
            cocktailData?.drinks?.[0].strGlass
          ) : (
            <Skeleton width="40%" />
          )}
        </h2>

        <ul className="my-4 list-disc ml-4  text-web-gray text-xs">
          {!loading
            ? cocktailData?.drinks?.[0].strInstructions
                .split(".")
                .slice(0, -1)
                .map((item, index) => <li key={index}>{item}.</li>)
            : Array.from(Array(5), (e, i) => (
                <li>
                  <Skeleton width={Math.floor(Math.random() * 80) + 10 + "%"} />
                </li>
              ))}
        </ul>

        <h3 className="font-raleway font-bold text-xl">Ingredients</h3>

        <ul className=" flex items-center w-full h-1/2 grow  text-xs py-4">
          <Slider {...settings} className="w-full h-full cursor-grab">
            {!loading
              ? cocktailIngredients.map((item, index) => (
                  <li key={index} className="h-full flex flex-col">
                    <div className="h-2/3 bg-gray-100 hover:bg-gray-200 transition-all rounded-2xl flex p-2">
                      <img
                        src={`https://www.thecocktaildb.com/images/ingredients/${item.ingredient}-Medium.png`}
                        alt="new"
                        className="w-full rounded-3xl object-cover drop-shadow-main"
                      />
                    </div>
                    <h3 className="w-full mt-2 h-max text-center font-semibold">
                      {item.measure} {item.ingredient}
                    </h3>
                  </li>
                ))
              : Array.from(Array(4), (e, i) => <Skeleton height="100%" />)}
          </Slider>
        </ul>
      </div>
    </div>
  );
}
