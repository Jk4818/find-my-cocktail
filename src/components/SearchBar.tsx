import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {
  return (
    <form action="">
      <div className='relative w-[30rem] h-10 pl-4 pr-2 gap-2 flex items-center rounded-lg text-black bg-white drop-shadow-main border-2 outline-none focus-within:border-blue-300 transition-all'>
        <input id="default-search" className='h-full w-full font-raleway text-sm outline-none appearance-none'></input>
        <AiOutlineSearch className='text-2xl'/>
      </div>
    </form>
  );
}

export default SearchBar;