import React from 'react'
import NoResults from '../components/NoResults'

type Props = {}

export default function NotFound({ }: Props) {
    return (
        <div className='relative flex w-full h-90 items-center justify-center flex-col font-bold text-3xl'>
            
            We couldn't find that page.
            
        </div>
    )
}