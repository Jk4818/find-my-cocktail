import React from 'react'
import Logo from './Logo'
import SearchBar from './SearchBar'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='relative w-full h-36 flex justify-center  items-center'>
      <div className='absolute w-full'>
        <Logo />
      </div>
      <SearchBar />
    </div>
  )
}