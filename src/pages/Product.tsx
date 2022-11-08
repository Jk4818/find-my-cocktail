import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/Slider.css";

import MainCard from "../components/MainCard";

import { Cocktail } from "../common/types";


const Product = () => {


  const [cocktailData, setCocktailData] = useState<Cocktail>();
  const [loading, setLoading] = useState(true);

  const { cocktailId } = useParams<{cocktailId? : string}>();


  useEffect(() => {
    function getProduct() {
      setLoading(true);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`
      )
        .then((res) => res.json())
        .then((data) => {
          setCocktailData(data.drinks[0]);
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
      <MainCard loading={loading} cocktailData={cocktailData} />
    </div>
  );
}

export default Product;
