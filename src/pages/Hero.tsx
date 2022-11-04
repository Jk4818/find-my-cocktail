import React from 'react';
import ListCard from '../components/ListCard';

import SearchBar from '../components/SearchBar';
import Title from '../components/Title';

function Hero() {
  return (
    <div>
      <Title />
      <SearchBar />
      <ListCard />
    </div>
  );
}

export default Hero;