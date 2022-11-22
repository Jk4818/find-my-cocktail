import React, { useState, useEffect } from "react";

import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";

import { Drinks } from "../common/types";
import { useSearchParams } from "react-router-dom";
import NoResults from "../components/NoResults";
import { titleCase } from "../common/helper";
type Props = {};

export default function Search({}: Props) {
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState<Drinks>();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    function getProduct() {
      setLoading(true);
      fetch(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParams.get(
          "q"
        )}`
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
    <div className="w-screen p-4 flex flex-col gap-20 items-center">
      <h1 className="font-raleway font-black text-4xl text-black z-10 w-[35rem] text-left">
        Browse: {titleCase(searchParams.get("q"))}
      </h1>

      <div className=" w-[35rem] flex flex-col gap-10">
        {!loading ? (
          searchData?.drinks !== null ? (
            searchData?.drinks.map((drink, index) => (
              <SearchCard key={index} cocktailData={drink} loading={loading} />
            ))
          ) : (
            <NoResults />
          )
        ) : (
          <SearchCard cocktailData={undefined} loading={loading} />
        )}
      </div>
    </div>
  );
}
