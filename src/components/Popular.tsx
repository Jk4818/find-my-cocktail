import React, { useEffect, useState } from 'react'
import ListCard from './ListCard'

import { Cocktail, Ingredients } from "../common/types";

type Props = {
};

export default function Popular({}: Props) {

  const [cocktailData, setCocktailData] = useState<Cocktail>();
  const [loading, setLoading] = useState(true);

  
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
    <div className='w-1/2 h-full bg-red-800'>
      
      <ListCard loading={loading} cocktailData={cocktailData}/>
    </div>
  )
}