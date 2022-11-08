import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/Slider.css";

import MainCard from "../components/MainCard";



const Product = () => {
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
