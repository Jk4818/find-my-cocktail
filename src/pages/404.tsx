import React from 'react'
import NoResults from '../components/NoResults'

type Props = {}

export default function NotFound({ }: Props) {
    return (
        <div className='flex w-full h-full items-center justify-center flex-col'>
            404
            <NoResults />
        </div>
    )
}