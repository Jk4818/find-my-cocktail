import React, {useEffect} from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

import { useLocation } from "react-router-dom";

type Props = {}

export default function Header({}: Props) {

  //home usestate
  const [home, setHome] = React.useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
    }
  }, [location]);
  
  
  return (
    <div className='relative w-full h-20 lg:h-36 flex px-4 md:px-20 justify-end md:justify-center  items-center'>
      <div className='absolute px-8 md:px-20 w-full'>
        <Logo />
      </div>
      <div className={`${home && `2xl:hidden pl-16`} w-96`}>
        <SearchBar />
      </div>
    </div>
  )
}