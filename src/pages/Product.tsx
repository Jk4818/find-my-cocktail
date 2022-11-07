import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Loader from "../components/Loader";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Slider.css";

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
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
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

        <div className="absolute left-0 right-0 mx-auto bottom-0 w-11/12 h-[30rem] p-10 flex flex-col text-left font-raleway bg-white rounded-t-3xl drop-shadow-main opacity-70 backdrop-blur-3xl filter">
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
          {/* <ul className="mt-4 list-none text-web-gray text-xs">
            {cocktailIngredients.map((item, index) => (
              <li key={index}>{item.measure} {item.ingredient}</li>
            )) || <Loader />}
          </ul> */}

          <ul className="mt-auto flex items-center w-full flex-1 py-8 text-xs">
            <Slider {...settings} className="w-full h-full bg-blue-400">
              <li className="flex flex-col items-center justify-center">
                <div className=" h-full bg-white rounded-2xl">
                  <img
                    src="https://www.thecocktaildb.com/images/ingredients/gin-Small.png"
                    alt="new"
                    className="w-full rounded-3xl object-contain drop-shadow-main"
                  />
                </div>
                <h3 className="flex-1 align-middle text-center">4.5cL Bourbon</h3>
              </li>

              <li className="  h-full bg-white rounded-2xl">
                <img
                  src="https://www.thecocktaildb.com/images/ingredients/Bourbon-small.png"
                  alt="new"
                  className="w-full h-full rounded-3xl object-contain drop-shadow-main"
                />
              </li>
              <li className="  h-full  bg-white rounded-2xl">
                <img
                  src="https://www.thecocktaildb.com/images/ingredients/Vodka-small.png"
                  alt="new"
                  className="w-full h-full rounded-3xl object-contain drop-shadow-main"
                />
              </li>
              <li className="  h-full bg-white rounded-2xl">
                <img
                  src="https://www.thecocktaildb.com/images/ingredients/Lemon-small.png"
                  alt="new"
                  className="w-full h-full rounded-3xl object-contain drop-shadow-main"
                />
              </li>
            </Slider>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
