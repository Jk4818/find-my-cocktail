import React, { useEffect, useState } from 'react'
import ListCard from './ListCard'

import { Drinks } from "../common/types";

type Props = {
};

export default function Popular({}: Props) {

  const [cocktailData, setCocktailData] = useState<Drinks>();
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    function getProduct() {
      setLoading(true);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setCocktailData(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getProduct();
  }, []);

  return (
    <div className='w-full px-4 pt-12 h-full bg-red-800 flex flex-wrap justify-between'>
      
      {!loading ? (
            cocktailData?.drinks.map((drink, index) => (
              <ListCard key={index} cocktailData={drink} loading={loading} />
            ))
        ) : (
          <ListCard cocktailData={undefined} loading={loading} />
        )}
    </div>
  )
}