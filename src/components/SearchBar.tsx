import React, {useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function SearchBar() {

  const [searchInput, setSearchInput] = useState("");
  
  
  function handleChange(e : React.ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    setSearchInput(e.target.value);
  }
  
  return (
    <form action='/search' method='get' className='w-full md:w-[30rem] 2xl:w-full'>
      <div className='relative w-full h-10 pl-4 pr-2 gap-2 flex items-center rounded-lg text-black bg-white focus-within:drop-shadow-main border-2 outline-none focus-within:border-blue-300 transition-all'>
        <input type="text" placeholder="Your next cocktail here..." name='q' onChange={handleChange} id="header-search" className='h-full w-full font-raleway text-sm outline-none appearance-none'></input>
        <button type='submit'>
          <AiOutlineSearch className='text-2xl'/>
        </button>
      </div>
    </form>
  );
}

export default SearchBar;