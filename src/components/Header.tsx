import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='relative w-full h-36 flex px-4 md:px-20 justify-end md:justify-center  items-center'>
      <div className='absolute px-8 md:px-20 w-full'>
        <Logo />
      </div>
      <SearchBar />
    </div>
  )
}