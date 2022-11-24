import React, {useEffect} from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

import { useLocation } from "react-router-dom";

type Props = {}

export default function Header({}: Props) {

  const location = useLocation();
  useEffect(() => {
    if(location.pathname === "/") {

    }
      
  }, [])
  
  
  return (
    <div className='relative w-full h-20 lg:h-36 flex px-4 md:px-20 justify-end md:justify-center  items-center'>
      <div className='absolute px-8 md:px-20 w-full'>
        <Logo />
      </div>
      <div className='2xl:hidden pl-16'>
        <SearchBar />
      </div>
    </div>
  )
}