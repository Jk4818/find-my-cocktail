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
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=old`
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
    <div className='w-full max-w-5xl px-4'>
      <h1 className='w-full md:px-16 lg:pl-0 font-raleway text-4xl font-black'>Popular.</h1>
      <ul className=' pt-20 h-max flex flex-wrap justify-center lg:justify-between gap-14'>
        {!loading ? (
              cocktailData?.drinks.slice(0, 6).map((drink, index) => (
                <ListCard key={index} cocktailData={drink} loading={loading} />
              ))
          ) : (
            <ListCard cocktailData={undefined} loading={loading} />
          )}
      </ul>
    </div>
  )
}