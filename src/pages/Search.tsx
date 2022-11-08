import * as React from "react";
import SearchBar from "../components/SearchBar";
import SearchCard from "../components/SearchCard";

export interface ISearchProps {}

export default class Search extends React.Component<ISearchProps> {
  public render() {
    return (
      <div className="w-screen h-screen p-4 flex flex-col items-center">
        <SearchBar />

        <div className="mt-40 w-[35rem]">
          <SearchCard />
        </div>
      </div>
    );
  }
}
