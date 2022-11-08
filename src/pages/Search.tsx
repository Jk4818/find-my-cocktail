import * as React from 'react';
import SearchBar from '../components/SearchBar';

export interface ISearchProps {
}

export default class Search extends React.Component<ISearchProps> {
  public render() {
    return (
      <div className='w-screen h-screen p-4 flex justify-center'>
        <SearchBar />
      </div>
    );
  }
}
