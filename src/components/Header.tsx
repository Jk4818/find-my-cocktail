import React from 'react'
import SearchBar from './SearchBar'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className=' w-full h-36 flex justify-center items-center'>
      <SearchBar />
    </div>
  )
}