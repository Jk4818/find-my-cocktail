import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/Slider.css";

import MainCard from "../components/MainCard";

import { Drinks, Cocktail, Ingredients} from "../common/types";


const Product = () => {


  const [cocktailData, setCocktailData] = useState<Drinks>();
  const [loading, setLoading] = useState(true);
  const [cocktailIngredients, setCocktailIngredients] = useState<Ingredients[]>(
    []
  );

  const { cocktailId } = useParams<{cocktailId? : string}>();

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
      console.log("done: ",cocktailId);
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
        });
    }

    getProduct();
  }, []);

  return (
    <div className="relative w-screen h-screen flex justify-center">
      <MainCard loading={loading} cocktailData={cocktailData} cocktailIngredients={cocktailIngredients} />
    </div>
  );
}

export default Product;
