import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Loader from "../components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";


import {GoChevronRight, GoChevronLeft} from "react-icons/go";

function Product() {
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

  var settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <GoChevronRight />,
    prevArrow: <GoChevronLeft />,
  };

  const [cocktailData, setCocktailData] = useState<Drinks>();
  const [loading, setLoading] = useState(true);
  const [cocktailId, setCocktailId] = useState("11001");
  const [cocktailIngredients, setCocktailIngredients] = useState<Ingredients[]>(
    []
  );

  function parseIngredients(cocktail: Cocktail) {
    const ingredients = [];
    for (let i = 1; i < 16; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
    console.log(ingredients);
    setCocktailIngredients(ingredients);
  }

  useEffect(() => {
    function getProduct() {
      setLoading(true);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktailData(data);
          console.log(data);
          parseIngredients(data.drinks[0]);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
        });
    }

    getProduct();
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-center">
      <div className="relative w-[30rem] h-full">
        <div className="mt-20 w-full aspect-square">
          <img
            src="https://www.thecocktaildb.com/images/media/drink/vrwquq1478252802.jpg/preview"
            alt="new"
            className="w-full h-full rounded-3xl object-contain drop-shadow-main"
          />
        </div>

        <div className="absolute left-0 right-0 mx-auto bottom-0 w-11/12 h-[32rem] p-10 flex flex-col text-left font-raleway bg-white rounded-2xl drop-shadow-main opacity-70 backdrop-blur-3xl filter">
          <h1 className="font-bold font-merriweather text-3xl">
            {cocktailData?.drinks?.[0].strDrink || <Loader />}
          </h1>
          <h2 className="text-sm text-web-gray">
            {cocktailData?.drinks?.[0].strGlass || <Loader />}
          </h2>

          <ul className="my-4 list-disc ml-4  text-web-gray text-xs">
            {cocktailData?.drinks?.[0].strInstructions
              .split(".")
              .slice(0, -1)
              .map((item, index) => <li key={index}>{item}.</li>) || <Loader />}
          </ul>

          <h3 className="font-raleway font-bold text-xl">Ingredients</h3>


          <ul className=" flex items-center w-full h-1/2 grow  text-xs py-4">
            <Slider {...settings} className="w-full h-full cursor-grab">
              {cocktailIngredients.map((item, index) => (
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
              )) || <Loader />}
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;