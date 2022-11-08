import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";

import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";

import { Drinks } from "../common/types";
type Props = {};

export default function Search({}: Props) {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState<Drinks>();

  useEffect(() => {
    function getProduct() {
      setLoading(true);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita`
      )
        .then((res) => res.json())
        .then((data) => {
          setSearchData(data);
          console.log(data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }

    getProduct();
  }, []);

  return (
    <div className="w-screen h-screen p-4 flex flex-col items-center">
      <SearchBar />

      <div className="mt-40 w-[35rem] flex flex-col gap-10">
        {!loading
          ? searchData?.drinks.map((drink, index) => (
              <SearchCard key={index} cocktailData={drink} loading={loading}/>
            ))
          : Array.from(Array(5), (e, i) => (
              <li key={i}>
                <Skeleton width={Math.floor(Math.random() * 80) + 10 + "%"} />
              </li>
            ))}
      </div>
    </div>
  );
}
